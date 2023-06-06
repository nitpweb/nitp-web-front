module.exports = {
 "jsx-a11y/href-no-hash": ignore,
 "jsx-a11y/label-has-for": ignore,
 "jsx-a11y/anchor-is-valid": [
  warn,
  {
   aspects: ["invalidHref"],
  },
 ],
 "jsx-a11y/click-events-have-key-events": ignore,
 "react/no-unescaped-entities": ignore,
 extends: ["prettier", "eslint:recommended", "plugin:react/recommended"],
}
