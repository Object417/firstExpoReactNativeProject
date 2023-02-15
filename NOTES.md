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

## Dakuten and Handakuten

```
[["\u304c", "ga"], ["\u304e", "gi"], ["\u3050", "gu"], ["\u3052", "ge"], ["\u3054", "go"], ["\u3056", "za"], ["\u3058", "ji"], ["\u305a", "zu"], ["\u305c", "ze"], ["\u305e", "zo"], ["\u3060", "da"], ["\u3062", "ji"], ["\u3065", "zu"], ["\u3067", "de"], ["\u3069", "do"], ["\u3070", "ba"], ["\u3073", "bi"], ["\u3076", "bu"], ["\u3079", "be"], ["\u307c", "bo"], ["\u3071", "pa"], ["\u3074", "pi"], ["\u3077", "pu"], ["\u307a", "pe"], ["\u307d", "po"]]
```
