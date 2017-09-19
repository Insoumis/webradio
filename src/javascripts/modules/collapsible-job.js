export default class CollapsibleJob {
  constructor(el) {
    this.el = el
    this.el.querySelector('button').addEventListener('click', this.handleClick.bind(this))
    this.el.classList.add('is-loaded')
  }

  handleClick(e) {
    e.srcElement.parentNode.parentNode.classList.toggle('is-open')
  }
}
