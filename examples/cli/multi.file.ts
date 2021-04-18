import { customElement, property } from "lit-element";
import { TestFieldParent } from "./multi-parent";

/**
 * A text field web component
 */
@customElement("text-field")
export class TextField extends TestFieldParent {
  /**
   * The value of the text field
   * @attr
   */
  value = "default value";

  @property({ attribute: "max-length" }) maxLength = 100;

  @property({ attribute: false }) errorObject = { description: "error" };

  /**
   * Disables this element
   */
  @property({ type: Boolean }) disabled = false;

  static get properties() {
    return {
      /**
       * Size of the text field
       * @type {"small"|"large"}
       */
      size: {
        type: String,
      },
    };
  }

  static get observedAttributes() {
    return ["value"];
  }
}
