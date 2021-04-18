import { customElement, LitElement, property } from "lit-element";

/**
 * @prop {Array} [permissions=false] Permissions to you know, do stuff in the app
 * @prop {Object} [config={}] The app's config (rather important!)
 */
@customElement("test-field-parent")
export class TestFieldParent extends LitElement {

  @property({ type: Object, reflect: true })
  public config: ConfigType = null;

  @property({ type: Array, reflect: true })
  public permissions: PermissionsType = null;
}
