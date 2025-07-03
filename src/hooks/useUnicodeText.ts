import { useMemo } from 'react';

/**
 * Converts HTML to fancy unicode for formatted text only.
 * Bold -> bold unicode, italic -> italic unicode, underline -> underline unicode, strikethrough -> double-struck.
 * Line breaks are fully preserved.
 */
export function useUnicodeText(html: string): string {
  const bold = (c: string) => {
    const code = c.codePointAt(0);
    if (code === undefined) return c;
    if (code >= 0x41 && code <= 0x5A) return String.fromCodePoint(0x1D5D4 + (code - 0x41)); // A-Z
    if (code >= 0x61 && code <= 0x7A) return String.fromCodePoint(0x1D5EE + (code - 0x61)); // a-z
    if (code >= 0x30 && code <= 0x39) return String.fromCodePoint(0x1D7EC + (code - 0x30)); // 0-9
    return c;
  };

  const italic = (c: string) => {
    const code = c.codePointAt(0);
    if (code === undefined) return c;
    if (code >= 0x41 && code <= 0x5A) return String.fromCodePoint(0x1D608 + (code - 0x41)); // A-Z
    if (code >= 0x61 && code <= 0x7A) return String.fromCodePoint(0x1D622 + (code - 0x61)); // a-z
    return c;
  };

  const underline = (c: string) => c + '\u0332';
  const strike = (c: string) => c + '\u0336';

  function convert(node: Node): string {
    if (node.nodeType === Node.TEXT_NODE) {
      return (node as Text).data;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement;
      let fn = (x: string) => x;

      if (el.tagName === 'B' || el.tagName === 'STRONG') fn = bold;
      if (el.tagName === 'I' || el.tagName === 'EM') fn = italic;
      if (el.tagName === 'U') fn = underline;
      if (el.tagName === 'S' || el.tagName === 'STRIKE' || el.tagName === 'DEL') fn = strike;
      if (el.tagName === 'BR') return '\n';

      let out = '';
      el.childNodes.forEach(child => {
        const childText = convert(child);
        out += Array.from(childText).map(fn).join('');
      });

      // Block-level elements create line breaks after
      if (['DIV', 'P'].includes(el.tagName)) {
        out += '\n';
      }

      return out;
    }

    return '';
  }

  return useMemo(() => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return Array.from(div.childNodes).map(convert).join('');
  }, [html]);
}
