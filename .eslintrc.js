module.exports = {
    "extends": "airbnb",
    "rules": {
     "react/prefer-stateless-function": 0,
     "react/jsx-filename-extension": 0
   },
   "env":{
    "browser": true,x
   },
   "jsx-a11y/anchor-is-valid": [ "error", {
    "components": [ "Link" ],
    "specialLink": [ "hrefLeft", "hrefRight" ],
    "aspects": [ "noHref", "invalidHref", "preferButton" ]
  }]
};
