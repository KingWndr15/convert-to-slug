function convertToSlug(text) {
	  return text
	    .toLowerCase() // Convert to lowercase
	    .replace(/\s+/g, '-') // Replace spaces with hyphens
	    .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters (except hyphens)
	    .replace(/--+/g, '-'); // Replace consecutive hyphens with a single hyphen
}


const originalText = "this is a link"
const urlFriendlyText = convertToSlug(originalText);

console.log(urlFriendlyText);

