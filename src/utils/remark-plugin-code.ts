
import { visit } from 'unist-util-visit'
import { runHighlighterWithAstro } from '@astrojs/prism/dist/highlighter'
import { codeBlockTemplate } from './code-block-template'

export function remarkCode () {
  return function (tree: any) {
    visit(tree, 'code', (node) => {
      let { lang, value, meta } = node
      let { html, classLanguage } = runHighlighterWithAstro(lang, value)

      node.type = 'html'

      node.value = codeBlockTemplate(
        classLanguage, html, lang, meta
      )

      return node
    })
  }
}
