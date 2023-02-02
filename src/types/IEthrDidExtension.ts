import { IPluginMethodMap, IAgentContext, IDIDManager, IKeyManager } from '@veramo/core'

/**
 * Extension of did-provider-ethr with method-specific features.
 *
 * Due to the generalized-structure of AbstractIdentifierProvider that is being implemented by EthrDIDProvider,
 * it is not desired to add did:ethr specific functionality to it. This plugin provides some additional
 * functionality that is specific to did:ethr, like changing the owner of an identifier.
 *
 * @beta
 */
export interface IEthrDidExtension extends IPluginMethodMap {
  /**
   * Change controller/ owner of an did:ethr identity
   *
   * @param args - Input parameters for this method
   * @param context - The required context where this method can run.
   *   Declaring a context type here lets other developers know which other plugins
   *   need to also be installed for this method to work.
   * @returns Promise that resolves to a transaction hash
   */
  ethrChangeControllerKey(args: IEthrChangeControllerKeyArgs, context: IRequiredContext): Promise<string>
}

/**
 * Arguments needed for {@link EthrDidExtension.ethrChangeControllerKey}
 *
 * @beta
 */
export interface IEthrChangeControllerKeyArgs {
  did: string,
  kid: string
}

/**
 * This context describes the requirements of this plugin.
 * For this plugin to function properly, the agent needs to also have other plugins installed that implement the
 * interfaces declared here.
 * You can also define requirements on a more granular level, for each plugin method or event handler of your plugin.
 *
 * @beta
 */
export type IRequiredContext = IAgentContext<IKeyManager & IDIDManager>