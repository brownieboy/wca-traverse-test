import { customElement, LitElement, property } from "lit-element";

/**
 * @prop {Array} [permissions=false] Permissions to you know, do stuff in the app
 * @prop {Object} [config={}] The app's config (rather important!)
 */
 @customElement("test-field-parent")
 class TextFieldParent extends LitElement {
 
   @property({ type: Object, reflect: true })
   public config: ConfigType = null;
 
   @property({ type: Array, reflect: true })
   public permissions: PermissionsType = null;
 }
 
/**
 * A text field web component
 */
@customElement("text-field")
export class TextField extends TextFieldParent {
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
