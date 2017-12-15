import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "fontFamily": "'Roboto', sans-serif",
        "lineHeight": 1.4,
        "background": "#eee"
    },
    "input": {
        "fontFamily": "'Roboto', sans-serif",
        "lineHeight": 1.4,
        "background": "#fafafa",
        "fontSize": 0.85,
        "width": "100%",
        "paddingTop": 0.5,
        "paddingRight": 0.5,
        "paddingBottom": 0.5,
        "paddingLeft": 0.5,
        "border": "2px solid #ddd"
    },
    "textarea": {
        "fontFamily": "'Roboto', sans-serif",
        "lineHeight": 1.4,
        "background": "#eee"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "pre": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "backgroundColor": "#eee",
        "whiteSpace": "pre-wrap"
    },
    ":not(pre) > code": {
        "backgroundColor": "#eee",
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3
    },
    "img": {
        "maxWidth": "100%",
        "maxHeight": 20
    },
    "imgactive": {
        "boxShadow": "0 0 0 2px blue"
    },
    "blockquote": {
        "borderLeft": "2px solid #ddd",
        "marginLeft": 0,
        "marginRight": 0,
        "paddingLeft": 10,
        "color": "#aaa",
        "fontStyle": "italic"
    },
    "blockquote[dir=\"rtl\"]": {
        "borderLeft": "none",
        "paddingLeft": 0,
        "paddingRight": 10,
        "borderRight": "2px solid #ddd"
    },
    "table": {
        "borderCollapse": "collapse"
    },
    "td": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "border": "2px solid #ddd"
    },
    "input:focus": {
        "outline": 0,
        "borderColor": "blue"
    },
    "material-icons": {
        "fontSize": 18,
        "verticalAlign": "text-bottom"
    },
    "nav": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "color": "#AAA",
        "background": "#000"
    },
    "nav-title": {
        "marginRight": 0.5
    },
    "nav-links": {
        "float": "right"
    },
    "nav-link": {
        "marginLeft": 1,
        "color": "#AAA",
        "textDecoration": "none"
    },
    "nav-link:hover": {
        "color": "#FFF",
        "textDecoration": "underline"
    },
    "tabs": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "backgroundColor": "#222",
        "textAlign": "center",
        "marginBottom": 30
    },
    "tab": {
        "color": "#777",
        "display": "inline-block",
        "textDecoration": "none",
        "paddingTop": 0.2,
        "paddingRight": 0.5,
        "paddingBottom": 0.2,
        "paddingLeft": 0.5,
        "borderRadius": 0.2,
        "marginBottom": 0.2
    },
    "tab:hover": {
        "background": "#333"
    },
    "tab + tab": {
        "marginLeft": 0.5
    },
    "tabactive": {
        "color": "white",
        "background": "#333"
    },
    "example": {
        "maxWidth": 42,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "background": "#fff"
    },
    "editor > * > * + *": {
        "marginTop": 1
    },
    "menu > *": {
        "display": "inline-block"
    },
    "menu > * + *": {
        "marginLeft": 15
    },
    "button": {
        "color": "#ccc",
        "cursor": "pointer"
    },
    "button[data-active=\"true\"]": {
        "color": "black"
    },
    "toolbar-menu": {
        "paddingTop": 1,
        "paddingRight": 0,
        "paddingBottom": 17,
        "paddingLeft": 18,
        "marginTop": 0,
        "marginRight": -20,
        "marginBottom": 20,
        "marginLeft": -20,
        "borderBottom": "2px solid #eee"
    },
    "hover-menu": {
        "paddingTop": 8,
        "paddingRight": 7,
        "paddingBottom": 6,
        "paddingLeft": 7,
        "position": "absolute",
        "zIndex": 1,
        "top": -10000,
        "left": -10000,
        "marginTop": -6,
        "opacity": 0,
        "backgroundColor": "#222",
        "borderRadius": 4,
        "transition": "opacity .75s"
    },
    "hover-menu button": {
        "color": "#aaa"
    },
    "hover-menu button[data-active=\"true\"]": {
        "color": "#fff"
    },
    "emojiselected": {
        "outline": "2px solid blue"
    },
    "check-list-item + check-list-item": {
        "marginTop": 0
    },
    "check-list-item": {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "center"
    },
    "check-list-item > span:first-child": {
        "marginRight": 0.75
    },
    "check-list-item > span:last-child": {
        "flex": 1
    },
    "check-list-item > span:last-child:focus": {
        "outline": "none"
    }
});