// Import the Building class from 5-building.js
import Building from './5-building';

// Define the SkyHighBuilding class that extends Building
class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the constructor of the parent class (Building)
    this._floors = floors;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}

// Export the SkyHighBuilding class
export default SkyHighBuilding;
