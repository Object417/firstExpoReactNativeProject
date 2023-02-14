# Notes

## Convert JS unicode string to symbol

```js
String.fromCharCode(parseInt("304a", 16)) // "お"

// parseInt(number/string, radix)
//parseInt(hex, 16)

"お".charCodeAt(0).toString(16) // "304a"
```

## Python: Create `requirements.txt`

```
pip freeze > requirements.txt
```

## Hiragana

```json
{
  "ii": { "letter": "ii", "symbol": "\u3044\u3044" },
  "i~e": { "letter": "i~e", "symbol": "\u3044\u3047" }
}
```
