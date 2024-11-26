import { join, kebabCase, isArray } from "lodash";

export const slugify = string => {
  const a =
    "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
  const b =
    "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");

  return (
    string
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, "-and-") // Replace & with 'and'
      .replace(/[^\w]+/g, "") // Remove all non-word characters
      // eslint-disable-next-line no-useless-escape
      .replace(/\-\-+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, "")
  ); // Trim - from end of text
};

export const formatPhoneNumber = phone => {
  phone.trim();
  const results =
    /^((\+1)|1)? ?\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})( ?(ext\.? ?|x)(\d*))?$/.exec(
      phone
    );
  if (results !== null && results.length > 8) {
    return `(${results[3]}) ${results[4]}-${results[5]}${
      typeof results[8] !== "undefined" ? ` x${results[8]}` : ""
    }`;
  }
  return phone;
};

export const createKey = key =>
  kebabCase(join(isArray(key) ? key : [key].filter(char => char), "-")).trim();
