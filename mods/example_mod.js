// This is how to add a new mod to the game.

// Create a new Javascript file like this one.
// Add the file to the mods folder on GitHub, or host it somewhere else.
// https://github.com/R74nCom/sandboxels/tree/main/mods

// To add it in the Mod Loader:
// If it is in the mods folder, you can just use the name of the file.
// If it is hosted somewhere else, you can use the full URL, including the HTTPS://.

// Adding elements:
elements.walk_through_tree = {
    color: "#ffffff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 100000000000,
    state: "liquid",
    density: 7200,
};
