<div align="center">
  <img src="https://cloud.githubusercontent.com/assets/399657/21955696/46e882d4-da3e-11e6-94a6-720c34e27df7.jpg" />
</div>
<div align="center">
  <a href="https://www.codacy.com/app/spencerkelly86/nlp_compromise">
    <img src="https://api.codacy.com/project/badge/grade/82cc8ebd98b64ed199d7be6021488062" />
  </a>
  <a href="https://npmjs.org/package/compromise">
    <img src="https://img.shields.io/npm/v/compromise.svg?style=flat-square" />
  </a>
  <a href="https://www.codacy.com/app/spencerkelly86/nlp_compromise">
    <img src="https://api.codacy.com/project/badge/Coverage/82cc8ebd98b64ed199d7be6021488062" />
  </a>
  <div>modest natural language processing in javascript</div>
  <sub>
    by
    <a href="https://github.com/spencermountain">Spencer Kelly</a> and
    <a href="https://github.com/nlp-compromise/compromise/graphs/contributors">
      many contributors
    </a>
  </sub>
	<div align="center">
  	Small-enough for the browser, fast-enough for keypress.
	</div>
</div>
<br/>

save yourself from **regex-whackamole**:
```js
var doc = nlp(myNovel) //parse any text you want..
doc.sentences().if('the #Adjective of times').out()//query for any shape/pattern
// "it was the blurst of times??"
```

compromise is not [the cleverest](#Justification), but it is small, quick, and good-enough for a large number of uses.

With [plugins](), adding vocabulary, setting a context, and fixing errors is a quick one-liner.

<!-- three-table section -->
<div align="center">
  <table align="center">
    <tr align="center">
      <td align="center">
        <b>
          <a href="https://unpkg.com/compromise@latest/builds/compromise.min.js">
            210kb
          </a>
        </b>
        <div>
           &nbsp; &nbsp; &nbsp; &nbsp; one javascript file &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
      </td>
      <td align="center">
        <div>
          <b>
            <a href="https://github.com/nlp-compromise/compromise/wiki/Accuracy">
              86%
            </a>
          </b>
          <div>
            &nbsp; &nbsp; on the Penn treebank &nbsp; &nbsp;
         </div>
      </td>
      <td align="center">
        <b>🙏</b>
        <div>
          &nbsp; &nbsp; <kbd>npm install compromise</kbd> &nbsp; &nbsp;
        </div>
      </td>
      <td align="center">
        <b>IE9+</b>
        <div>
           &nbsp; &nbsp; &nbsp;  caniuse, youbetcha &nbsp; &nbsp; &nbsp;
        </div>
      </td>
    </tr>
  </table>
</div>
