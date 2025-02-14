import { ts } from "ts-morph"

type CommonJSExport<T extends ts.Expression> = ts.BinaryExpression & {
  left: ts.PropertyAccessExpression & {
    expression: ts.Identifier & { text: "module" }
    name: ts.Identifier & { text: "exports" }
  }
  operatorToken: ts.Token<ts.SyntaxKind.EqualsToken>
  right: T
}

type DefaultExport<T extends ts.Expression> = (ts.ExportAssignment & { expression: T }) | CommonJSExport<ts.Expression>

export function isDefaultExport<T extends ts.Expression>(node: ts.Node): node is DefaultExport<T> {
  if (ts.isExportAssignment(node)) {
    return true
  }

  if (ts.isBinaryExpression(node) && ts.isPropertyAccessExpression(node.left)) {
    return node.left.expression.getText() === "module" && node.left.name.getText() === "exports"
  }

  return false
}

export function getExpressionForDefaultExport(node: DefaultExport<ts.Expression>): ts.Expression {
  if (ts.isExportAssignment(node)) {
    return node.expression
  }

  return node.right
}
