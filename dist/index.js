function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"bgdark":"_2vs-X","fade":"_1E8Gh","modal":"_1pyOm","closeBtn":"_lHXPM","title":"_2xulF","text":"_3fmQp"};

var Modal = function Modal(_ref) {
  var openState = _ref.openState,
    onRequestClose = _ref.onRequestClose,
    content = _ref.content;
  if (openState) {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    return /*#__PURE__*/React.createElement("div", {
      className: styles.bgdark
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.modal
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.closeBtn,
      onClick: function onClick() {
        return onRequestClose(false);
      }
    }, "\u2716"), /*#__PURE__*/React.createElement("h1", {
      className: styles.title
    }, content.title), /*#__PURE__*/React.createElement("h3", {
      className: styles.text
    }, content.text)));
  } else {
    document.body.style.overflow = 'auto';
    return null;
  }
};

module.exports = Modal;
//# sourceMappingURL=index.js.map