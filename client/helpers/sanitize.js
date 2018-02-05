'use strict'

export default {
  /**
   * Remove HTML tags
   *
   * @param {String} content String to sanitze
   */
  stripHTML (content) {
    let el = document.createElement('div')
    el.innerHTML = content
    return el.textContent || el.innerText || ''
  },
  /**
   * Remove control characters
   *
   * @param {String} content String to sanitze
   */
  stripControlChars (content) {
    return content.replace(/[\x00-\x1F\x7F-\x9F]/gi, '') // eslint-disable-line no-control-regex
  }
}
