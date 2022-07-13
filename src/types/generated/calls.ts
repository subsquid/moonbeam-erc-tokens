import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result} from './support'
import * as v900 from './v900'
import * as v1001 from './v1001'
import * as v1101 from './v1101'
import * as v1201 from './v1201'
import * as v1300 from './v1300'
import * as v1401 from './v1401'
import * as v1502 from './v1502'
import * as v1606 from './v1606'

export class AssetManagerChangeExistingAssetTypeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AssetManager.change_existing_asset_type')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Change the xcm type mapping for a given assetId
   * We also change this if the previous units per second where pointing at the old
   * assetType
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('AssetManager.change_existing_asset_type') === '374e400d2b4ea9f5d3b638e3602dfe3ed9b4c85b9c86c117b2fe9d45b6bb2fa8'
  }

  /**
   * Change the xcm type mapping for a given assetId
   * We also change this if the previous units per second where pointing at the old
   * assetType
   */
  get asV1201(): {assetId: bigint, newAssetType: v1201.AssetType} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Change the xcm type mapping for a given assetId
   * We also change this if the previous units per second where pointing at the old
   * assetType
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('AssetManager.change_existing_asset_type') === 'f0478b267c090f740c32891882e8e3bb99b32335ac45bacde29763f0adb0d03f'
  }

  /**
   * Change the xcm type mapping for a given assetId
   * We also change this if the previous units per second where pointing at the old
   * assetType
   */
  get asV1300(): {assetId: bigint, newAssetType: v1300.AssetType, numAssetsWeightHint: number} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetManagerDestroyForeignAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AssetManager.destroy_foreign_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Destroy a given foreign assetId
   * The weight in this case is the one returned by the trait
   * plus the db writes and reads from removing all the associated
   * data
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('AssetManager.destroy_foreign_asset') === '09e6ff52b371674ae306d6301950646dce6cc086f719bd8e2d24220f923053ac'
  }

  /**
   * Destroy a given foreign assetId
   * The weight in this case is the one returned by the trait
   * plus the db writes and reads from removing all the associated
   * data
   */
  get asV1401(): {assetId: bigint, destroyAssetWitness: v1401.DestroyWitness, numAssetsWeightHint: number} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetManagerDestroyLocalAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AssetManager.destroy_local_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Destroy a given local assetId
   * We do not store anything related to local assets in this pallet other than the counter
   * and the counter is not used for destroying the asset, so no additional db reads/writes
   * to be counter here
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('AssetManager.destroy_local_asset') === 'f0f8f979ff438d8d9bb3da7ac6203b3614a764a050ee261c1d5dd27c0a5d5c86'
  }

  /**
   * Destroy a given local assetId
   * We do not store anything related to local assets in this pallet other than the counter
   * and the counter is not used for destroying the asset, so no additional db reads/writes
   * to be counter here
   */
  get asV1401(): {assetId: bigint, destroyAssetWitness: v1401.DestroyWitness} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetManagerRegisterAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AssetManager.register_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Register new asset with the asset manager
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('AssetManager.register_asset') === 'a2d70845f9e9897f01823f5608bdd5717920d06f8c67721d6a8c905afcbc7ed1'
  }

  /**
   * Register new asset with the asset manager
   */
  get asV1201(): {asset: v1201.AssetType, metadata: v1201.AssetRegistrarMetadata, minAmount: bigint, isSufficient: boolean} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetManagerRegisterForeignAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AssetManager.register_foreign_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Register new asset with the asset manager
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('AssetManager.register_foreign_asset') === 'a2d70845f9e9897f01823f5608bdd5717920d06f8c67721d6a8c905afcbc7ed1'
  }

  /**
   * Register new asset with the asset manager
   */
  get asV1401(): {asset: v1401.AssetType, metadata: v1401.AssetRegistrarMetadata, minAmount: bigint, isSufficient: boolean} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetManagerRegisterLocalAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AssetManager.register_local_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Register a new local asset
   * No information is stored in this pallet about the local asset
   * The reason is that we dont need to hold a mapping between the multilocation
   * and the local asset, as this conversion is deterministic
   * Further, we dont allow xcm fee payment in local assets
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('AssetManager.register_local_asset') === 'efe0296983aca68bc07a494a3c730795532df2d43b43c4ecbeb1f81381bd9bdd'
  }

  /**
   * Register a new local asset
   * No information is stored in this pallet about the local asset
   * The reason is that we dont need to hold a mapping between the multilocation
   * and the local asset, as this conversion is deterministic
   * Further, we dont allow xcm fee payment in local assets
   */
  get asV1401(): {creator: v1401.AccountId20, owner: v1401.AccountId20, isSufficient: boolean, minBalance: bigint} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetManagerRemoveExistingAssetTypeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AssetManager.remove_existing_asset_type')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove a given assetId -> assetType association
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('AssetManager.remove_existing_asset_type') === 'c9c6b4dbe7d3f09a466025c508d1c772dfa1dd1619cd45b4f4214c6a51749d9b'
  }

  /**
   * Remove a given assetId -> assetType association
   */
  get asV1401(): {assetId: bigint, numAssetsWeightHint: number} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetManagerRemoveSupportedAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AssetManager.remove_supported_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove a given assetType from the supported assets for fee payment
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('AssetManager.remove_supported_asset') === '26341975d0e923bdb18aef97fc23e57da3527d576334b2f4adddd38ba88482ea'
  }

  /**
   * Remove a given assetType from the supported assets for fee payment
   */
  get asV1300(): {assetType: v1300.AssetType, numAssetsWeightHint: number} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetManagerSetAssetUnitsPerSecondCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AssetManager.set_asset_units_per_second')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Change the amount of units we are charging per execution second for a given AssetId
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('AssetManager.set_asset_units_per_second') === '6f945a016fa1354dda472a1d8283c850f742893500097ea765948e3c95150daa'
  }

  /**
   * Change the amount of units we are charging per execution second for a given AssetId
   */
  get asV1201(): {assetType: v1201.AssetType, unitsPerSecond: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Change the amount of units we are charging per execution second for a given AssetType
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('AssetManager.set_asset_units_per_second') === 'a85348079b1e7e84a08dd1043d5d7d3ad5ef986a6e4d07119d4d89dd3a780a18'
  }

  /**
   * Change the amount of units we are charging per execution second for a given AssetType
   */
  get asV1300(): {assetType: v1300.AssetType, unitsPerSecond: bigint, numAssetsWeightHint: number} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsApproveTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.approve_transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Approve an amount of asset for transfer by a delegated third-party account.
   * 
   * Origin must be Signed.
   * 
   * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
   * for the purpose of holding the approval. If some non-zero amount of assets is already
   * approved from signing account to `delegate`, then it is topped up or unreserved to
   * meet the right value.
   * 
   * NOTE: The signing account does not need to own `amount` of assets at the point of
   * making this call.
   * 
   * - `id`: The identifier of the asset.
   * - `delegate`: The account to delegate permission to transfer asset.
   * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
   * already an approval in place, then this acts additively.
   * 
   * Emits `ApprovedTransfer` on success.
   * 
   * Weight: `O(1)`
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.approve_transfer') === '4db3d28cfcd3b3fc4e84a5e4a62834eb281e6d67424bf1b5029094ab8d8241ac'
  }

  /**
   * Approve an amount of asset for transfer by a delegated third-party account.
   * 
   * Origin must be Signed.
   * 
   * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
   * for the purpose of holding the approval. If some non-zero amount of assets is already
   * approved from signing account to `delegate`, then it is topped up or unreserved to
   * meet the right value.
   * 
   * NOTE: The signing account does not need to own `amount` of assets at the point of
   * making this call.
   * 
   * - `id`: The identifier of the asset.
   * - `delegate`: The account to delegate permission to transfer asset.
   * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
   * already an approval in place, then this acts additively.
   * 
   * Emits `ApprovedTransfer` on success.
   * 
   * Weight: `O(1)`
   */
  get asV1201(): {id: bigint, delegate: v1201.AccountId20, amount: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsBurnCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.burn')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
   * 
   * Origin must be Signed and the sender should be the Manager of the asset `id`.
   * 
   * Bails with `BalanceZero` if the `who` is already dead.
   * 
   * - `id`: The identifier of the asset to have some amount burned.
   * - `who`: The account to be debited from.
   * - `amount`: The maximum amount by which `who`'s balance should be reduced.
   * 
   * Emits `Burned` with the actual amount burned. If this takes the balance to below the
   * minimum for the asset, then the amount burned is increased to take it to zero.
   * 
   * Weight: `O(1)`
   * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.burn') === '4cad641cee50c15107b9540a3ce93683e97f083d298b9610cc5e7eadb4dd02ad'
  }

  /**
   * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
   * 
   * Origin must be Signed and the sender should be the Manager of the asset `id`.
   * 
   * Bails with `BalanceZero` if the `who` is already dead.
   * 
   * - `id`: The identifier of the asset to have some amount burned.
   * - `who`: The account to be debited from.
   * - `amount`: The maximum amount by which `who`'s balance should be reduced.
   * 
   * Emits `Burned` with the actual amount burned. If this takes the balance to below the
   * minimum for the asset, then the amount burned is increased to take it to zero.
   * 
   * Weight: `O(1)`
   * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
   */
  get asV1201(): {id: bigint, who: v1201.AccountId20, amount: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsCancelApprovalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.cancel_approval')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel all of some asset approved for delegated transfer by a third-party account.
   * 
   * Origin must be Signed and there must be an approval in place between signer and
   * `delegate`.
   * 
   * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
   * 
   * - `id`: The identifier of the asset.
   * - `delegate`: The account delegated permission to transfer asset.
   * 
   * Emits `ApprovalCancelled` on success.
   * 
   * Weight: `O(1)`
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.cancel_approval') === 'da4d3513855c372fc5f3fdabcefb88dbb890318c6eaf56cd1dc98bd7bfb3c83b'
  }

  /**
   * Cancel all of some asset approved for delegated transfer by a third-party account.
   * 
   * Origin must be Signed and there must be an approval in place between signer and
   * `delegate`.
   * 
   * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
   * 
   * - `id`: The identifier of the asset.
   * - `delegate`: The account delegated permission to transfer asset.
   * 
   * Emits `ApprovalCancelled` on success.
   * 
   * Weight: `O(1)`
   */
  get asV1201(): {id: bigint, delegate: v1201.AccountId20} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsClearMetadataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.clear_metadata')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Clear the metadata for an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * Any deposit is freed for the asset owner.
   * 
   * - `id`: The identifier of the asset to clear.
   * 
   * Emits `MetadataCleared`.
   * 
   * Weight: `O(1)`
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.clear_metadata') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
  }

  /**
   * Clear the metadata for an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * Any deposit is freed for the asset owner.
   * 
   * - `id`: The identifier of the asset to clear.
   * 
   * Emits `MetadataCleared`.
   * 
   * Weight: `O(1)`
   */
  get asV1201(): {id: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsCreateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.create')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Issue a new class of fungible assets from a public origin.
   * 
   * This new asset class has no assets initially and its owner is the origin.
   * 
   * The origin must be Signed and the sender must have sufficient funds free.
   * 
   * Funds of sender are reserved by `AssetDeposit`.
   * 
   * Parameters:
   * - `id`: The identifier of the new asset. This must not be currently in use to identify
   * an existing asset.
   * - `admin`: The admin of this class of assets. The admin is the initial address of each
   * member of the asset class's admin team.
   * - `min_balance`: The minimum balance of this new asset that any single account must
   * have. If an account's balance is reduced below this, then it collapses to zero.
   * 
   * Emits `Created` event when successful.
   * 
   * Weight: `O(1)`
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.create') === 'fe010eb678d9a2ed54cfc0dad639a9e77d6e8654f1b6469af70d62c44ce92f4f'
  }

  /**
   * Issue a new class of fungible assets from a public origin.
   * 
   * This new asset class has no assets initially and its owner is the origin.
   * 
   * The origin must be Signed and the sender must have sufficient funds free.
   * 
   * Funds of sender are reserved by `AssetDeposit`.
   * 
   * Parameters:
   * - `id`: The identifier of the new asset. This must not be currently in use to identify
   * an existing asset.
   * - `admin`: The admin of this class of assets. The admin is the initial address of each
   * member of the asset class's admin team.
   * - `min_balance`: The minimum balance of this new asset that any single account must
   * have. If an account's balance is reduced below this, then it collapses to zero.
   * 
   * Emits `Created` event when successful.
   * 
   * Weight: `O(1)`
   */
  get asV1201(): {id: bigint, admin: v1201.AccountId20, minBalance: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsDestroyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.destroy')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Destroy a class of fungible assets.
   * 
   * The origin must conform to `ForceOrigin` or must be Signed and the sender must be the
   * owner of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be destroyed. This must identify an existing
   * asset.
   * 
   * Emits `Destroyed` event when successful.
   * 
   * NOTE: It can be helpful to first freeze an asset before destroying it so that you
   * can provide accurate witness information and prevent users from manipulating state
   * in a way that can make it harder to destroy.
   * 
   * Weight: `O(c + p + a)` where:
   * - `c = (witness.accounts - witness.sufficients)`
   * - `s = witness.sufficients`
   * - `a = witness.approvals`
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.destroy') === '9a8a5a90459d4fa03bad7d8dc11eed0c6acdd779939cd82a16cebc1973a19f8c'
  }

  /**
   * Destroy a class of fungible assets.
   * 
   * The origin must conform to `ForceOrigin` or must be Signed and the sender must be the
   * owner of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be destroyed. This must identify an existing
   * asset.
   * 
   * Emits `Destroyed` event when successful.
   * 
   * NOTE: It can be helpful to first freeze an asset before destroying it so that you
   * can provide accurate witness information and prevent users from manipulating state
   * in a way that can make it harder to destroy.
   * 
   * Weight: `O(c + p + a)` where:
   * - `c = (witness.accounts - witness.sufficients)`
   * - `s = witness.sufficients`
   * - `a = witness.approvals`
   */
  get asV1201(): {id: bigint, witness: v1201.DestroyWitness} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsForceAssetStatusCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.force_asset_status')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Alter the attributes of a given asset.
   * 
   * Origin must be `ForceOrigin`.
   * 
   * - `id`: The identifier of the asset.
   * - `owner`: The new Owner of this asset.
   * - `issuer`: The new Issuer of this asset.
   * - `admin`: The new Admin of this asset.
   * - `freezer`: The new Freezer of this asset.
   * - `min_balance`: The minimum balance of this new asset that any single account must
   * have. If an account's balance is reduced below this, then it collapses to zero.
   * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
   * value to account for the state bloat associated with its balance storage. If set to
   * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
   * an ED in the Balances pallet or whatever else is used to control user-account state
   * growth).
   * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
   * instructions.
   * 
   * Emits `AssetStatusChanged` with the identity of the asset.
   * 
   * Weight: `O(1)`
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.force_asset_status') === '4064a4a429c6658c75f2ecb2650525c8f334004bd4f02f209725cdb577806610'
  }

  /**
   * Alter the attributes of a given asset.
   * 
   * Origin must be `ForceOrigin`.
   * 
   * - `id`: The identifier of the asset.
   * - `owner`: The new Owner of this asset.
   * - `issuer`: The new Issuer of this asset.
   * - `admin`: The new Admin of this asset.
   * - `freezer`: The new Freezer of this asset.
   * - `min_balance`: The minimum balance of this new asset that any single account must
   * have. If an account's balance is reduced below this, then it collapses to zero.
   * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
   * value to account for the state bloat associated with its balance storage. If set to
   * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
   * an ED in the Balances pallet or whatever else is used to control user-account state
   * growth).
   * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
   * instructions.
   * 
   * Emits `AssetStatusChanged` with the identity of the asset.
   * 
   * Weight: `O(1)`
   */
  get asV1201(): {id: bigint, owner: v1201.AccountId20, issuer: v1201.AccountId20, admin: v1201.AccountId20, freezer: v1201.AccountId20, minBalance: bigint, isSufficient: boolean, isFrozen: boolean} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsForceCancelApprovalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.force_cancel_approval')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel all of some asset approved for delegated transfer by a third-party account.
   * 
   * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
   * account of the asset `id`.
   * 
   * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
   * 
   * - `id`: The identifier of the asset.
   * - `delegate`: The account delegated permission to transfer asset.
   * 
   * Emits `ApprovalCancelled` on success.
   * 
   * Weight: `O(1)`
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.force_cancel_approval') === 'a95a8723eac71ce3250ae31053dc4de053e760b119f476d503db1f7abb9c75b6'
  }

  /**
   * Cancel all of some asset approved for delegated transfer by a third-party account.
   * 
   * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
   * account of the asset `id`.
   * 
   * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
   * 
   * - `id`: The identifier of the asset.
   * - `delegate`: The account delegated permission to transfer asset.
   * 
   * Emits `ApprovalCancelled` on success.
   * 
   * Weight: `O(1)`
   */
  get asV1201(): {id: bigint, owner: v1201.AccountId20, delegate: v1201.AccountId20} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsForceClearMetadataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.force_clear_metadata')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Clear the metadata for an asset.
   * 
   * Origin must be ForceOrigin.
   * 
   * Any deposit is returned.
   * 
   * - `id`: The identifier of the asset to clear.
   * 
   * Emits `MetadataCleared`.
   * 
   * Weight: `O(1)`
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.force_clear_metadata') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
  }

  /**
   * Clear the metadata for an asset.
   * 
   * Origin must be ForceOrigin.
   * 
   * Any deposit is returned.
   * 
   * - `id`: The identifier of the asset to clear.
   * 
   * Emits `MetadataCleared`.
   * 
   * Weight: `O(1)`
   */
  get asV1201(): {id: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsForceCreateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.force_create')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Issue a new class of fungible assets from a privileged origin.
   * 
   * This new asset class has no assets initially.
   * 
   * The origin must conform to `ForceOrigin`.
   * 
   * Unlike `create`, no funds are reserved.
   * 
   * - `id`: The identifier of the new asset. This must not be currently in use to identify
   * an existing asset.
   * - `owner`: The owner of this class of assets. The owner has full superuser permissions
   * over this asset, but may later change and configure the permissions using
   * `transfer_ownership` and `set_team`.
   * - `min_balance`: The minimum balance of this new asset that any single account must
   * have. If an account's balance is reduced below this, then it collapses to zero.
   * 
   * Emits `ForceCreated` event when successful.
   * 
   * Weight: `O(1)`
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.force_create') === 'afadf2f20b7327e34f814f72f8361431e52a89b983a4c4efc04feec2821019a8'
  }

  /**
   * Issue a new class of fungible assets from a privileged origin.
   * 
   * This new asset class has no assets initially.
   * 
   * The origin must conform to `ForceOrigin`.
   * 
   * Unlike `create`, no funds are reserved.
   * 
   * - `id`: The identifier of the new asset. This must not be currently in use to identify
   * an existing asset.
   * - `owner`: The owner of this class of assets. The owner has full superuser permissions
   * over this asset, but may later change and configure the permissions using
   * `transfer_ownership` and `set_team`.
   * - `min_balance`: The minimum balance of this new asset that any single account must
   * have. If an account's balance is reduced below this, then it collapses to zero.
   * 
   * Emits `ForceCreated` event when successful.
   * 
   * Weight: `O(1)`
   */
  get asV1201(): {id: bigint, owner: v1201.AccountId20, isSufficient: boolean, minBalance: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsForceSetMetadataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.force_set_metadata')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Force the metadata for an asset to some value.
   * 
   * Origin must be ForceOrigin.
   * 
   * Any deposit is left alone.
   * 
   * - `id`: The identifier of the asset to update.
   * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
   * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
   * - `decimals`: The number of decimals this asset uses to represent one unit.
   * 
   * Emits `MetadataSet`.
   * 
   * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.force_set_metadata') === '5197c4dc1b19808caa5eb6363c6d281dc29fc658a2124f3030ba4e8886e36135'
  }

  /**
   * Force the metadata for an asset to some value.
   * 
   * Origin must be ForceOrigin.
   * 
   * Any deposit is left alone.
   * 
   * - `id`: The identifier of the asset to update.
   * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
   * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
   * - `decimals`: The number of decimals this asset uses to represent one unit.
   * 
   * Emits `MetadataSet`.
   * 
   * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
   */
  get asV1201(): {id: bigint, name: Uint8Array, symbol: Uint8Array, decimals: number, isFrozen: boolean} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsForceTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.force_transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Move some assets from one account to another.
   * 
   * Origin must be Signed and the sender should be the Admin of the asset `id`.
   * 
   * - `id`: The identifier of the asset to have some amount transferred.
   * - `source`: The account to be debited.
   * - `dest`: The account to be credited.
   * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
   * `dest`'s balance increased. The amount actually transferred may be slightly greater in
   * the case that the transfer would otherwise take the `source` balance above zero but
   * below the minimum balance. Must be greater than zero.
   * 
   * Emits `Transferred` with the actual amount transferred. If this takes the source balance
   * to below the minimum for the asset, then the amount transferred is increased to take it
   * to zero.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
   * `dest`.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.force_transfer') === '4f40d207d46901d797decd85bf982182b8f5f2085e80de9179773ff8bf82c71a'
  }

  /**
   * Move some assets from one account to another.
   * 
   * Origin must be Signed and the sender should be the Admin of the asset `id`.
   * 
   * - `id`: The identifier of the asset to have some amount transferred.
   * - `source`: The account to be debited.
   * - `dest`: The account to be credited.
   * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
   * `dest`'s balance increased. The amount actually transferred may be slightly greater in
   * the case that the transfer would otherwise take the `source` balance above zero but
   * below the minimum balance. Must be greater than zero.
   * 
   * Emits `Transferred` with the actual amount transferred. If this takes the source balance
   * to below the minimum for the asset, then the amount transferred is increased to take it
   * to zero.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
   * `dest`.
   */
  get asV1201(): {id: bigint, source: v1201.AccountId20, dest: v1201.AccountId20, amount: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsFreezeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.freeze')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Disallow further unprivileged transfers from an account.
   * 
   * Origin must be Signed and the sender should be the Freezer of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * - `who`: The account to be frozen.
   * 
   * Emits `Frozen`.
   * 
   * Weight: `O(1)`
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.freeze') === 'e23174d6525e73918f65f8c3a09c76bd3023dc877957609c34e922c32c67b405'
  }

  /**
   * Disallow further unprivileged transfers from an account.
   * 
   * Origin must be Signed and the sender should be the Freezer of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * - `who`: The account to be frozen.
   * 
   * Emits `Frozen`.
   * 
   * Weight: `O(1)`
   */
  get asV1201(): {id: bigint, who: v1201.AccountId20} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsFreezeAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.freeze_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Disallow further unprivileged transfers for the asset class.
   * 
   * Origin must be Signed and the sender should be the Freezer of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * 
   * Emits `Frozen`.
   * 
   * Weight: `O(1)`
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.freeze_asset') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
  }

  /**
   * Disallow further unprivileged transfers for the asset class.
   * 
   * Origin must be Signed and the sender should be the Freezer of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * 
   * Emits `Frozen`.
   * 
   * Weight: `O(1)`
   */
  get asV1201(): {id: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsMintCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.mint')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Mint assets of a particular class.
   * 
   * The origin must be Signed and the sender must be the Issuer of the asset `id`.
   * 
   * - `id`: The identifier of the asset to have some amount minted.
   * - `beneficiary`: The account to be credited with the minted assets.
   * - `amount`: The amount of the asset to be minted.
   * 
   * Emits `Issued` event when successful.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.mint') === '080fb5d43492845552a936c54bfa735df1176f153ceef4cec8ea6464ba48734f'
  }

  /**
   * Mint assets of a particular class.
   * 
   * The origin must be Signed and the sender must be the Issuer of the asset `id`.
   * 
   * - `id`: The identifier of the asset to have some amount minted.
   * - `beneficiary`: The account to be credited with the minted assets.
   * - `amount`: The amount of the asset to be minted.
   * 
   * Emits `Issued` event when successful.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
   */
  get asV1201(): {id: bigint, beneficiary: v1201.AccountId20, amount: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsRefundCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.refund')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Return the deposit (if any) of an asset account.
   * 
   * The origin must be Signed.
   * 
   * - `id`: The identifier of the asset for the account to be created.
   * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
   * 
   * Emits `Refunded` event when successful.
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('Assets.refund') === 'cfce64e36c421100db147253f1087292a9478daf8e8c9b54faadb27f9f81fe3d'
  }

  /**
   * Return the deposit (if any) of an asset account.
   * 
   * The origin must be Signed.
   * 
   * - `id`: The identifier of the asset for the account to be created.
   * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
   * 
   * Emits `Refunded` event when successful.
   */
  get asV1300(): {id: bigint, allowBurn: boolean} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsSetMetadataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.set_metadata')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the metadata for an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * Funds of sender are reserved according to the formula:
   * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
   * account any already reserved funds.
   * 
   * - `id`: The identifier of the asset to update.
   * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
   * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
   * - `decimals`: The number of decimals this asset uses to represent one unit.
   * 
   * Emits `MetadataSet`.
   * 
   * Weight: `O(1)`
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.set_metadata') === 'b142260ca2687dcfda31b9abcd465d84b02d11acdebd9fefa543ea7ca86ac3ec'
  }

  /**
   * Set the metadata for an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * Funds of sender are reserved according to the formula:
   * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
   * account any already reserved funds.
   * 
   * - `id`: The identifier of the asset to update.
   * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
   * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
   * - `decimals`: The number of decimals this asset uses to represent one unit.
   * 
   * Emits `MetadataSet`.
   * 
   * Weight: `O(1)`
   */
  get asV1201(): {id: bigint, name: Uint8Array, symbol: Uint8Array, decimals: number} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsSetTeamCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.set_team')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Change the Issuer, Admin and Freezer of an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * - `issuer`: The new Issuer of this asset.
   * - `admin`: The new Admin of this asset.
   * - `freezer`: The new Freezer of this asset.
   * 
   * Emits `TeamChanged`.
   * 
   * Weight: `O(1)`
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.set_team') === '174368a9dc9d3476c39fb78c30a8689564369aa0ffce495f9c85284781d27f22'
  }

  /**
   * Change the Issuer, Admin and Freezer of an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * - `issuer`: The new Issuer of this asset.
   * - `admin`: The new Admin of this asset.
   * - `freezer`: The new Freezer of this asset.
   * 
   * Emits `TeamChanged`.
   * 
   * Weight: `O(1)`
   */
  get asV1201(): {id: bigint, issuer: v1201.AccountId20, admin: v1201.AccountId20, freezer: v1201.AccountId20} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsThawCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.thaw')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Allow unprivileged transfers from an account again.
   * 
   * Origin must be Signed and the sender should be the Admin of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * - `who`: The account to be unfrozen.
   * 
   * Emits `Thawed`.
   * 
   * Weight: `O(1)`
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.thaw') === 'e23174d6525e73918f65f8c3a09c76bd3023dc877957609c34e922c32c67b405'
  }

  /**
   * Allow unprivileged transfers from an account again.
   * 
   * Origin must be Signed and the sender should be the Admin of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * - `who`: The account to be unfrozen.
   * 
   * Emits `Thawed`.
   * 
   * Weight: `O(1)`
   */
  get asV1201(): {id: bigint, who: v1201.AccountId20} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsThawAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.thaw_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Allow unprivileged transfers for the asset again.
   * 
   * Origin must be Signed and the sender should be the Admin of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be thawed.
   * 
   * Emits `Thawed`.
   * 
   * Weight: `O(1)`
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.thaw_asset') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
  }

  /**
   * Allow unprivileged transfers for the asset again.
   * 
   * Origin must be Signed and the sender should be the Admin of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be thawed.
   * 
   * Emits `Thawed`.
   * 
   * Weight: `O(1)`
   */
  get asV1201(): {id: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsTouchCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.touch')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Create an asset account for non-provider assets.
   * 
   * A deposit will be taken from the signer account.
   * 
   * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
   *   to be taken.
   * - `id`: The identifier of the asset for the account to be created.
   * 
   * Emits `Touched` event when successful.
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('Assets.touch') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
  }

  /**
   * Create an asset account for non-provider assets.
   * 
   * A deposit will be taken from the signer account.
   * 
   * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
   *   to be taken.
   * - `id`: The identifier of the asset for the account to be created.
   * 
   * Emits `Touched` event when successful.
   */
  get asV1300(): {id: bigint} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Move some assets from the sender account to another.
   * 
   * Origin must be Signed.
   * 
   * - `id`: The identifier of the asset to have some amount transferred.
   * - `target`: The account to be credited.
   * - `amount`: The amount by which the sender's balance of assets should be reduced and
   * `target`'s balance increased. The amount actually transferred may be slightly greater in
   * the case that the transfer would otherwise take the sender balance above zero but below
   * the minimum balance. Must be greater than zero.
   * 
   * Emits `Transferred` with the actual amount transferred. If this takes the source balance
   * to below the minimum for the asset, then the amount transferred is increased to take it
   * to zero.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
   * `target`.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.transfer') === '90870be27fea4eefa5d1ec8ebec5b8a619184045d219810233b5996342c9f1a3'
  }

  /**
   * Move some assets from the sender account to another.
   * 
   * Origin must be Signed.
   * 
   * - `id`: The identifier of the asset to have some amount transferred.
   * - `target`: The account to be credited.
   * - `amount`: The amount by which the sender's balance of assets should be reduced and
   * `target`'s balance increased. The amount actually transferred may be slightly greater in
   * the case that the transfer would otherwise take the sender balance above zero but below
   * the minimum balance. Must be greater than zero.
   * 
   * Emits `Transferred` with the actual amount transferred. If this takes the source balance
   * to below the minimum for the asset, then the amount transferred is increased to take it
   * to zero.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
   * `target`.
   */
  get asV1201(): {id: bigint, target: v1201.AccountId20, amount: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsTransferApprovedCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.transfer_approved')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer some asset balance from a previously delegated account to some third-party
   * account.
   * 
   * Origin must be Signed and there must be an approval in place by the `owner` to the
   * signer.
   * 
   * If the entire amount approved for transfer is transferred, then any deposit previously
   * reserved by `approve_transfer` is unreserved.
   * 
   * - `id`: The identifier of the asset.
   * - `owner`: The account which previously approved for a transfer of at least `amount` and
   * from which the asset balance will be withdrawn.
   * - `destination`: The account to which the asset balance of `amount` will be transferred.
   * - `amount`: The amount of assets to transfer.
   * 
   * Emits `TransferredApproved` on success.
   * 
   * Weight: `O(1)`
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.transfer_approved') === 'bd03545098810ed5dbd253b46d36db96ee61230b8950dcb69f07baf49638308f'
  }

  /**
   * Transfer some asset balance from a previously delegated account to some third-party
   * account.
   * 
   * Origin must be Signed and there must be an approval in place by the `owner` to the
   * signer.
   * 
   * If the entire amount approved for transfer is transferred, then any deposit previously
   * reserved by `approve_transfer` is unreserved.
   * 
   * - `id`: The identifier of the asset.
   * - `owner`: The account which previously approved for a transfer of at least `amount` and
   * from which the asset balance will be withdrawn.
   * - `destination`: The account to which the asset balance of `amount` will be transferred.
   * - `amount`: The amount of assets to transfer.
   * 
   * Emits `TransferredApproved` on success.
   * 
   * Weight: `O(1)`
   */
  get asV1201(): {id: bigint, owner: v1201.AccountId20, destination: v1201.AccountId20, amount: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsTransferKeepAliveCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.transfer_keep_alive')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Move some assets from the sender account to another, keeping the sender account alive.
   * 
   * Origin must be Signed.
   * 
   * - `id`: The identifier of the asset to have some amount transferred.
   * - `target`: The account to be credited.
   * - `amount`: The amount by which the sender's balance of assets should be reduced and
   * `target`'s balance increased. The amount actually transferred may be slightly greater in
   * the case that the transfer would otherwise take the sender balance above zero but below
   * the minimum balance. Must be greater than zero.
   * 
   * Emits `Transferred` with the actual amount transferred. If this takes the source balance
   * to below the minimum for the asset, then the amount transferred is increased to take it
   * to zero.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
   * `target`.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.transfer_keep_alive') === '90870be27fea4eefa5d1ec8ebec5b8a619184045d219810233b5996342c9f1a3'
  }

  /**
   * Move some assets from the sender account to another, keeping the sender account alive.
   * 
   * Origin must be Signed.
   * 
   * - `id`: The identifier of the asset to have some amount transferred.
   * - `target`: The account to be credited.
   * - `amount`: The amount by which the sender's balance of assets should be reduced and
   * `target`'s balance increased. The amount actually transferred may be slightly greater in
   * the case that the transfer would otherwise take the sender balance above zero but below
   * the minimum balance. Must be greater than zero.
   * 
   * Emits `Transferred` with the actual amount transferred. If this takes the source balance
   * to below the minimum for the asset, then the amount transferred is increased to take it
   * to zero.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
   * `target`.
   */
  get asV1201(): {id: bigint, target: v1201.AccountId20, amount: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetsTransferOwnershipCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Assets.transfer_ownership')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Change the Owner of an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * - `id`: The identifier of the asset.
   * - `owner`: The new Owner of this asset.
   * 
   * Emits `OwnerChanged`.
   * 
   * Weight: `O(1)`
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Assets.transfer_ownership') === '19bba4b3716123a7f3da481737ff52ada19bd9bdfa37bdf5a9916d0a2d383793'
  }

  /**
   * Change the Owner of an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * - `id`: The identifier of the asset.
   * - `owner`: The new Owner of this asset.
   * 
   * Emits `OwnerChanged`.
   * 
   * Weight: `O(1)`
   */
  get asV1201(): {id: bigint, owner: v1201.AccountId20} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class AuthorFilterSetEligibleCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AuthorFilter.set_eligible')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Update the eligible ratio. Intended to be called by governance.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('AuthorFilter.set_eligible') === '09500100ee0ef7de7a517c77b545786d373383efeb1a42ac3f0ddaccc0f7486a'
  }

  /**
   * Update the eligible ratio. Intended to be called by governance.
   */
  get asV900(): {new: v900.Percent} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Update the eligible count. Intended to be called by governance.
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('AuthorFilter.set_eligible') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
  }

  /**
   * Update the eligible count. Intended to be called by governance.
   */
  get asV1502(): {new: v1502.NonZeroU32} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }
}

export class AuthorInherentKickOffAuthorshipValidationCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AuthorInherent.kick_off_authorship_validation')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * This inherent is a workaround to run code after the "real" inherents have executed,
   * but before transactions are executed.
   * This this should go into on_post_inherents when it is ready https://github.com/paritytech/substrate/pull/10128
   * TODO better weight. For now we jsut set a somewhat soncervative fudge factor
   */
  get isV1101(): boolean {
    return this._chain.getCallHash('AuthorInherent.kick_off_authorship_validation') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * This inherent is a workaround to run code after the "real" inherents have executed,
   * but before transactions are executed.
   * This this should go into on_post_inherents when it is ready https://github.com/paritytech/substrate/pull/10128
   * TODO better weight. For now we jsut set a somewhat soncervative fudge factor
   */
  get asV1101(): null {
    assert(this.isV1101)
    return this._chain.decodeCall(this.call)
  }
}

export class AuthorInherentSetAuthorCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AuthorInherent.set_author')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Inherent to set the author of a block
   */
  get isV900(): boolean {
    return this._chain.getCallHash('AuthorInherent.set_author') === 'dcc5e28c9d1f971621221e426a29058530d0292d866725d5251b75fe6b410660'
  }

  /**
   * Inherent to set the author of a block
   */
  get asV900(): {author: v900.Public} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class AuthorMappingAddAssociationCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AuthorMapping.add_association')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Register your AuthorId onchain so blocks you author are associated with your account.
   * 
   * Users who have been (or will soon be) elected active collators in staking,
   * should submit this extrinsic to have their blocks accepted and earn rewards.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('AuthorMapping.add_association') === 'c21728b5156f66dcb3edd0992c9a6c22c0541f5d479f1c54a53d7bfd2ff316b6'
  }

  /**
   * Register your AuthorId onchain so blocks you author are associated with your account.
   * 
   * Users who have been (or will soon be) elected active collators in staking,
   * should submit this extrinsic to have their blocks accepted and earn rewards.
   */
  get asV900(): {authorId: v900.Public} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Register your NimbusId onchain so blocks you author are associated with your account.
   * 
   * Users who have been (or will soon be) elected active collators in staking,
   * should submit this extrinsic to have their blocks accepted and earn rewards.
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('AuthorMapping.add_association') === '7def8b49ad9a867f4b8f41bad9aeb2fc9dc797e393fa0fd99ea36908c24959af'
  }

  /**
   * Register your NimbusId onchain so blocks you author are associated with your account.
   * 
   * Users who have been (or will soon be) elected active collators in staking,
   * should submit this extrinsic to have their blocks accepted and earn rewards.
   */
  get asV1606(): {nimbusId: v1606.Public} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class AuthorMappingClearAssociationCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AuthorMapping.clear_association')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Clear your AuthorId.
   * 
   * This is useful when you are no longer an author and would like to re-claim your security
   * deposit.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('AuthorMapping.clear_association') === 'c21728b5156f66dcb3edd0992c9a6c22c0541f5d479f1c54a53d7bfd2ff316b6'
  }

  /**
   * Clear your AuthorId.
   * 
   * This is useful when you are no longer an author and would like to re-claim your security
   * deposit.
   */
  get asV900(): {authorId: v900.Public} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Clear your Mapping.
   * 
   * This is useful when you are no longer an author and would like to re-claim your security
   * deposit.
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('AuthorMapping.clear_association') === '7def8b49ad9a867f4b8f41bad9aeb2fc9dc797e393fa0fd99ea36908c24959af'
  }

  /**
   * Clear your Mapping.
   * 
   * This is useful when you are no longer an author and would like to re-claim your security
   * deposit.
   */
  get asV1606(): {nimbusId: v1606.Public} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class AuthorMappingRegisterKeysCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AuthorMapping.register_keys')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Add association and set session keys
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('AuthorMapping.register_keys') === 'adaf357e4b5650c7fafa15359932b4a98d01f61ed9b5c89e1ac76a6edddb3120'
  }

  /**
   * Add association and set session keys
   */
  get asV1502(): {authorId: v1502.Public, keys: v1502.Public} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }
}

export class AuthorMappingRemoveKeysCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AuthorMapping.remove_keys')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove your Mapping.
   * 
   * This is useful when you are no longer an author and would like to re-claim your security
   * deposit.
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('AuthorMapping.remove_keys') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Remove your Mapping.
   * 
   * This is useful when you are no longer an author and would like to re-claim your security
   * deposit.
   */
  get asV1606(): null {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class AuthorMappingSetKeysCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AuthorMapping.set_keys')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set association and session keys at once.
   * 
   * This is useful for key rotation to update Nimbus and VRF keys in one call.
   * No new security deposit is required. Will replace `update_association` which is kept
   * now for backwards compatibility reasons.
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('AuthorMapping.set_keys') === '4411c9a6f5d5119ba52811e66c2a9e2ff73fda2c3e04353d49c13d78de09f14e'
  }

  /**
   * Set association and session keys at once.
   * 
   * This is useful for key rotation to update Nimbus and VRF keys in one call.
   * No new security deposit is required. Will replace `update_association` which is kept
   * now for backwards compatibility reasons.
   */
  get asV1502(): {oldAuthorId: v1502.Public, newAuthorId: v1502.Public, newKeys: v1502.Public} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Set association and session keys at once.
   * 
   * This is useful for key rotation to update Nimbus and VRF keys in one call.
   * No new security deposit is required. Will replace `update_association` which is kept
   * now for backwards compatibility reasons.
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('AuthorMapping.set_keys') === '1e076a42a122e827caa48bc7a1e0b1ec1975ac0fc7ef4acaea90d31ef2211d9f'
  }

  /**
   * Set association and session keys at once.
   * 
   * This is useful for key rotation to update Nimbus and VRF keys in one call.
   * No new security deposit is required. Will replace `update_association` which is kept
   * now for backwards compatibility reasons.
   */
  get asV1606(): {keys: Uint8Array} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class AuthorMappingUpdateAssociationCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AuthorMapping.update_association')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Change your AuthorId.
   * 
   * This is useful for normal key rotation or for when switching from one physical collator
   * machine to another. No new security deposit is required.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('AuthorMapping.update_association') === '2f2f4a00699632c2baabb047f17ff994177d3cad907787c96c1be6dc47f6a12a'
  }

  /**
   * Change your AuthorId.
   * 
   * This is useful for normal key rotation or for when switching from one physical collator
   * machine to another. No new security deposit is required.
   */
  get asV900(): {oldAuthorId: v900.Public, newAuthorId: v900.Public} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Change your Mapping.
   * 
   * This is useful for normal key rotation or for when switching from one physical collator
   * machine to another. No new security deposit is required.
   * This sets keys to new_nimbus_id.into() by default.
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('AuthorMapping.update_association') === '4e8d43e3278a800a953b93fd27ad2a578366360e4e092b6464408db2c876ff36'
  }

  /**
   * Change your Mapping.
   * 
   * This is useful for normal key rotation or for when switching from one physical collator
   * machine to another. No new security deposit is required.
   * This sets keys to new_nimbus_id.into() by default.
   */
  get asV1606(): {oldNimbusId: v1606.Public, newNimbusId: v1606.Public} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesForceTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.force_transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Exactly as `transfer`, except the origin must be root and the source account may be
   * specified.
   * # <weight>
   * - Same as transfer, but additional read and write because the source account is not
   *   assumed to be in the overlay.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Balances.force_transfer') === '5943ae1ef3513ee6550de75db5107994b40b854e8b6882c4a9016266af9e639b'
  }

  /**
   * Exactly as `transfer`, except the origin must be root and the source account may be
   * specified.
   * # <weight>
   * - Same as transfer, but additional read and write because the source account is not
   *   assumed to be in the overlay.
   * # </weight>
   */
  get asV900(): {source: v900.H160, dest: v900.H160, value: bigint} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesForceUnreserveCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.force_unreserve')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Unreserve some balance from a user by force.
   * 
   * Can only be called by ROOT.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Balances.force_unreserve') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
  }

  /**
   * Unreserve some balance from a user by force.
   * 
   * Can only be called by ROOT.
   */
  get asV900(): {who: v900.H160, amount: bigint} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesSetBalanceCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.set_balance')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the balances of a given account.
   * 
   * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
   * also decrease the total issuance of the system (`TotalIssuance`).
   * If the new free or reserved balance is below the existential deposit,
   * it will reset the account nonce (`frame_system::AccountNonce`).
   * 
   * The dispatch origin for this call is `root`.
   * 
   * # <weight>
   * - Independent of the arguments.
   * - Contains a limited number of reads and writes.
   * ---------------------
   * - Base Weight:
   *     - Creating: 27.56 µs
   *     - Killing: 35.11 µs
   * - DB Weight: 1 Read, 1 Write to `who`
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Balances.set_balance') === 'c99677ebbac8f5f7bfe7bd5a749e05bb3cd4d6d2051fc18240029f17b7039c68'
  }

  /**
   * Set the balances of a given account.
   * 
   * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
   * also decrease the total issuance of the system (`TotalIssuance`).
   * If the new free or reserved balance is below the existential deposit,
   * it will reset the account nonce (`frame_system::AccountNonce`).
   * 
   * The dispatch origin for this call is `root`.
   * 
   * # <weight>
   * - Independent of the arguments.
   * - Contains a limited number of reads and writes.
   * ---------------------
   * - Base Weight:
   *     - Creating: 27.56 µs
   *     - Killing: 35.11 µs
   * - DB Weight: 1 Read, 1 Write to `who`
   * # </weight>
   */
  get asV900(): {who: v900.H160, newFree: bigint, newReserved: bigint} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer some liquid free balance to another account.
   * 
   * `transfer` will set the `FreeBalance` of the sender and receiver.
   * It will decrease the total issuance of the system by the `TransferFee`.
   * If the sender's account is below the existential deposit as a result
   * of the transfer, the account will be reaped.
   * 
   * The dispatch origin for this call must be `Signed` by the transactor.
   * 
   * # <weight>
   * - Dependent on arguments but not critical, given proper implementations for input config
   *   types. See related functions below.
   * - It contains a limited number of reads and writes internally and no complex
   *   computation.
   * 
   * Related functions:
   * 
   *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *   - Transferring balances to accounts that did not exist before will cause
   *     `T::OnNewAccount::on_new_account` to be called.
   *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
   *     that the transfer will not kill the origin account.
   * ---------------------------------
   * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
   * - DB Weight: 1 Read and 1 Write to destination account
   * - Origin account is already in memory, so no DB operations for them.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Balances.transfer') === '467dee5087ba2ba771d4bb4c0c9afaa6fa202df3114b49c8db6e165b679e2c4f'
  }

  /**
   * Transfer some liquid free balance to another account.
   * 
   * `transfer` will set the `FreeBalance` of the sender and receiver.
   * It will decrease the total issuance of the system by the `TransferFee`.
   * If the sender's account is below the existential deposit as a result
   * of the transfer, the account will be reaped.
   * 
   * The dispatch origin for this call must be `Signed` by the transactor.
   * 
   * # <weight>
   * - Dependent on arguments but not critical, given proper implementations for input config
   *   types. See related functions below.
   * - It contains a limited number of reads and writes internally and no complex
   *   computation.
   * 
   * Related functions:
   * 
   *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *   - Transferring balances to accounts that did not exist before will cause
   *     `T::OnNewAccount::on_new_account` to be called.
   *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
   *     that the transfer will not kill the origin account.
   * ---------------------------------
   * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
   * - DB Weight: 1 Read and 1 Write to destination account
   * - Origin account is already in memory, so no DB operations for them.
   * # </weight>
   */
  get asV900(): {dest: v900.H160, value: bigint} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesTransferAllCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.transfer_all')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer the entire transferable balance from the caller account.
   * 
   * NOTE: This function only attempts to transfer _transferable_ balances. This means that
   * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
   * transferred by this function. To ensure that this function results in a killed account,
   * you might need to prepare the account by removing any reference counters, storage
   * deposits, etc...
   * 
   * The dispatch origin of this call must be Signed.
   * 
   * - `dest`: The recipient of the transfer.
   * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
   *   of the funds the account has, causing the sender account to be killed (false), or
   *   transfer everything except at least the existential deposit, which will guarantee to
   *   keep the sender account alive (true). # <weight>
   * - O(1). Just like transfer, but reading the user's transferable balance first.
   *   #</weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Balances.transfer_all') === 'f8ce8e577c7dd91d99648a56e9a48561995bf0be3a680c01895f87fb1c0f92e6'
  }

  /**
   * Transfer the entire transferable balance from the caller account.
   * 
   * NOTE: This function only attempts to transfer _transferable_ balances. This means that
   * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
   * transferred by this function. To ensure that this function results in a killed account,
   * you might need to prepare the account by removing any reference counters, storage
   * deposits, etc...
   * 
   * The dispatch origin of this call must be Signed.
   * 
   * - `dest`: The recipient of the transfer.
   * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
   *   of the funds the account has, causing the sender account to be killed (false), or
   *   transfer everything except at least the existential deposit, which will guarantee to
   *   keep the sender account alive (true). # <weight>
   * - O(1). Just like transfer, but reading the user's transferable balance first.
   *   #</weight>
   */
  get asV900(): {dest: v900.H160, keepAlive: boolean} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesTransferKeepAliveCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.transfer_keep_alive')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Same as the [`transfer`] call, but with a check that the transfer will not kill the
   * origin account.
   * 
   * 99% of the time you want [`transfer`] instead.
   * 
   * [`transfer`]: struct.Pallet.html#method.transfer
   * # <weight>
   * - Cheaper than transfer because account cannot be killed.
   * - Base Weight: 51.4 µs
   * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
   * #</weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Balances.transfer_keep_alive') === '467dee5087ba2ba771d4bb4c0c9afaa6fa202df3114b49c8db6e165b679e2c4f'
  }

  /**
   * Same as the [`transfer`] call, but with a check that the transfer will not kill the
   * origin account.
   * 
   * 99% of the time you want [`transfer`] instead.
   * 
   * [`transfer`]: struct.Pallet.html#method.transfer
   * # <weight>
   * - Cheaper than transfer because account cannot be killed.
   * - Base Weight: 51.4 µs
   * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
   * #</weight>
   */
  get asV900(): {dest: v900.H160, value: bigint} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class BaseFeeSetBaseFeePerGasCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'BaseFee.set_base_fee_per_gas')
    this._chain = ctx._chain
    this.call = call
  }

  get isV1201(): boolean {
    return this._chain.getCallHash('BaseFee.set_base_fee_per_gas') === '5bd81ad9acbdd818e9f9ac3692f947f6eb9f8929f0bd910ab889b377d83d3841'
  }

  get asV1201(): {fee: v1201.U256} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class BaseFeeSetElasticityCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'BaseFee.set_elasticity')
    this._chain = ctx._chain
    this.call = call
  }

  get isV1201(): boolean {
    return this._chain.getCallHash('BaseFee.set_elasticity') === 'efcd4cd6d4fde4342db62d270df85a88b1c153af50159f9bc1ba1ce1133f2524'
  }

  get asV1201(): {elasticity: v1201.Permill} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class BaseFeeSetIsActiveCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'BaseFee.set_is_active')
    this._chain = ctx._chain
    this.call = call
  }

  get isV1201(): boolean {
    return this._chain.getCallHash('BaseFee.set_is_active') === '3add098d9e97883d6727546805c06a15ec2e3d4dd29382f81a6061d644cf503d'
  }

  get asV1201(): {isActive: boolean} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class CouncilCollectiveCloseCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CouncilCollective.close')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Close a vote that is either approved, disapproved or whose voting period has ended.
   * 
   * May be called by any signed account in order to finish voting and close the proposal.
   * 
   * If called before the end of the voting period it will only close the vote if it is
   * has enough votes to be approved or disapproved.
   * 
   * If called after the end of the voting period abstentions are counted as rejections
   * unless there is a prime member set and the prime member cast an approval.
   * 
   * If the close operation completes successfully with disapproval, the transaction fee will
   * be waived. Otherwise execution of the approved operation will be charged to the caller.
   * 
   * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
   * proposal.
   * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
   * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1 + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - `P1` is the complexity of `proposal` preimage.
   *   - `P2` is proposal-count (code-bounded)
   * - DB:
   *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
   *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
   *    `O(P2)`)
   *  - any mutations done while executing `proposal` (`P1`)
   * - up to 3 events
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('CouncilCollective.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
  }

  /**
   * Close a vote that is either approved, disapproved or whose voting period has ended.
   * 
   * May be called by any signed account in order to finish voting and close the proposal.
   * 
   * If called before the end of the voting period it will only close the vote if it is
   * has enough votes to be approved or disapproved.
   * 
   * If called after the end of the voting period abstentions are counted as rejections
   * unless there is a prime member set and the prime member cast an approval.
   * 
   * If the close operation completes successfully with disapproval, the transaction fee will
   * be waived. Otherwise execution of the approved operation will be charged to the caller.
   * 
   * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
   * proposal.
   * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
   * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1 + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - `P1` is the complexity of `proposal` preimage.
   *   - `P2` is proposal-count (code-bounded)
   * - DB:
   *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
   *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
   *    `O(P2)`)
   *  - any mutations done while executing `proposal` (`P1`)
   * - up to 3 events
   * # </weight>
   */
  get asV900(): {proposalHash: v900.H256, index: number, proposalWeightBound: bigint, lengthBound: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class CouncilCollectiveDisapproveProposalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CouncilCollective.disapprove_proposal')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Disapprove a proposal, close, and remove it from the system, regardless of its current
   * state.
   * 
   * Must be called by the Root origin.
   * 
   * Parameters:
   * * `proposal_hash`: The hash of the proposal that should be disapproved.
   * 
   * # <weight>
   * Complexity: O(P) where P is the number of max proposals
   * DB Weight:
   * * Reads: Proposals
   * * Writes: Voting, Proposals, ProposalOf
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('CouncilCollective.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * Disapprove a proposal, close, and remove it from the system, regardless of its current
   * state.
   * 
   * Must be called by the Root origin.
   * 
   * Parameters:
   * * `proposal_hash`: The hash of the proposal that should be disapproved.
   * 
   * # <weight>
   * Complexity: O(P) where P is the number of max proposals
   * DB Weight:
   * * Reads: Proposals
   * * Writes: Voting, Proposals, ProposalOf
   * # </weight>
   */
  get asV900(): {proposalHash: v900.H256} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class CouncilCollectiveExecuteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CouncilCollective.execute')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('CouncilCollective.execute') === 'c9113d71d24fdfb988a85391ffc89f62347561f7b01e0ae1459c2a1f0431a150'
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get asV900(): {proposal: v900.Call, lengthBound: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('CouncilCollective.execute') === '319d51b31bd21e955fa48f065daecf3a48b9d55198713623bd22d0b6827fa83f'
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get asV1001(): {proposal: v1001.Call, lengthBound: number} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get isV1101(): boolean {
    return this._chain.getCallHash('CouncilCollective.execute') === '1b328c30dbf8b8efcdd6cdc29bae78ea217b53fb86a9e6da2da135aa90e83df1'
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get asV1101(): {proposal: v1101.Call, lengthBound: number} {
    assert(this.isV1101)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('CouncilCollective.execute') === '7bdb40aa524801577bf54bf709a131d78f1c3657bf19742c0b79f02d5f412726'
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get asV1201(): {proposal: v1201.Call, lengthBound: number} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('CouncilCollective.execute') === '439907ddfc4ab9ba45b0541b2aa217db8bbc9293824e0a59a684e827729f5948'
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get asV1300(): {proposal: v1300.Call, lengthBound: number} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('CouncilCollective.execute') === '6a141f06051ff42cf76e2bb9c0c481876500b349e82220cd690f0f9d6f96366d'
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get asV1401(): {proposal: v1401.Call, lengthBound: number} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('CouncilCollective.execute') === 'd6cc901718e0bc50fe6c8b205990fd8fd60bc058d4e4a304733e040d257f0a06'
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get asV1502(): {proposal: v1502.Call, lengthBound: number} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('CouncilCollective.execute') === '59f8675897f96e91bb8f284e7995eb3efe9b516bc96ec67fe18d6f2f52e33094'
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get asV1606(): {proposal: v1606.Call, lengthBound: number} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class CouncilCollectiveProposeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CouncilCollective.propose')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('CouncilCollective.propose') === 'a9edf7ffe699a46017fca95f4aaa259e1c0016fd5ab6bda5bcd16824b2d3d9f2'
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get asV900(): {threshold: number, proposal: v900.Call, lengthBound: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('CouncilCollective.propose') === 'ce756eee67ff886f188bc0ec8c42aa62c8ccc01c5392ece56d70d23177ddda79'
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get asV1001(): {threshold: number, proposal: v1001.Call, lengthBound: number} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get isV1101(): boolean {
    return this._chain.getCallHash('CouncilCollective.propose') === '85f1228b33fb2d7525f7108f5e0eeadbb6d1d564d7d3661d6530f937faeca9b1'
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get asV1101(): {threshold: number, proposal: v1101.Call, lengthBound: number} {
    assert(this.isV1101)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('CouncilCollective.propose') === '487c8cc24372418278743579aa96abcaa4ad858a0dbb3dc5a70660dcedff2965'
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get asV1201(): {threshold: number, proposal: v1201.Call, lengthBound: number} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('CouncilCollective.propose') === '0f9daeba2340dbb20c8f430dff8dc3212741c2ce67c5308412b677601fe931d6'
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get asV1300(): {threshold: number, proposal: v1300.Call, lengthBound: number} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('CouncilCollective.propose') === 'a564b5c6959ea1654f5698e3478ec1d7cd22d6aaefde84660b27e219d889eb46'
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get asV1401(): {threshold: number, proposal: v1401.Call, lengthBound: number} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('CouncilCollective.propose') === 'da4dc06c8c26159ad6c13cc083fd06e4eeefb083031fff6b94f5432072b7f8a1'
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get asV1502(): {threshold: number, proposal: v1502.Call, lengthBound: number} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('CouncilCollective.propose') === '5247fd0e6cd68c651797eeb11fd3e7b70343f3669fc9735e60c59caa63642860'
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get asV1606(): {threshold: number, proposal: v1606.Call, lengthBound: number} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class CouncilCollectiveSetMembersCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CouncilCollective.set_members')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the collective's membership.
   * 
   * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
   * - `prime`: The prime member whose vote sets the default.
   * - `old_count`: The upper bound for the previous number of members in storage. Used for
   *   weight estimation.
   * 
   * Requires root origin.
   * 
   * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
   *       the weight estimations rely on it to estimate dispatchable weight.
   * 
   * # <weight>
   * ## Weight
   * - `O(MP + N)` where:
   *   - `M` old-members-count (code- and governance-bounded)
   *   - `N` new-members-count (code- and governance-bounded)
   *   - `P` proposals-count (code-bounded)
   * - DB:
   *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
   *     members
   *   - 1 storage read (codec `O(P)`) for reading the proposals
   *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
   *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('CouncilCollective.set_members') === 'ab6e767d9a6fde9f3ad7e817d7fbd8d0a15f4571d174ffeb4f148566d7ccb879'
  }

  /**
   * Set the collective's membership.
   * 
   * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
   * - `prime`: The prime member whose vote sets the default.
   * - `old_count`: The upper bound for the previous number of members in storage. Used for
   *   weight estimation.
   * 
   * Requires root origin.
   * 
   * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
   *       the weight estimations rely on it to estimate dispatchable weight.
   * 
   * # <weight>
   * ## Weight
   * - `O(MP + N)` where:
   *   - `M` old-members-count (code- and governance-bounded)
   *   - `N` new-members-count (code- and governance-bounded)
   *   - `P` proposals-count (code-bounded)
   * - DB:
   *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
   *     members
   *   - 1 storage read (codec `O(P)`) for reading the proposals
   *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
   *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
   * # </weight>
   */
  get asV900(): {newMembers: v900.H160[], prime: (v900.H160 | undefined), oldCount: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class CouncilCollectiveVoteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CouncilCollective.vote')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Add an aye or nay vote for the sender to the given proposal.
   * 
   * Requires the sender to be a member.
   * 
   * Transaction fees will be waived if the member is voting on any particular proposal
   * for the first time and the call is successful. Subsequent vote changes will charge a
   * fee.
   * # <weight>
   * ## Weight
   * - `O(M)` where `M` is members-count (code- and governance-bounded)
   * - DB:
   *   - 1 storage read `Members` (codec `O(M)`)
   *   - 1 storage mutation `Voting` (codec `O(M)`)
   * - 1 event
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('CouncilCollective.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
  }

  /**
   * Add an aye or nay vote for the sender to the given proposal.
   * 
   * Requires the sender to be a member.
   * 
   * Transaction fees will be waived if the member is voting on any particular proposal
   * for the first time and the call is successful. Subsequent vote changes will charge a
   * fee.
   * # <weight>
   * ## Weight
   * - `O(M)` where `M` is members-count (code- and governance-bounded)
   * - DB:
   *   - 1 storage read `Members` (codec `O(M)`)
   *   - 1 storage mutation `Voting` (codec `O(M)`)
   * - 1 event
   * # </weight>
   */
  get asV900(): {proposal: v900.H256, index: number, approve: boolean} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class CrowdloanRewardsAssociateNativeIdentityCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CrowdloanRewards.associate_native_identity')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Associate a native rewards_destination identity with a crowdloan contribution.
   * 
   * The caller needs to provide the unassociated relay account and a proof to succeed
   * with the association
   * The proof is nothing but a signature over the reward_address using the relay keys
   */
  get isV900(): boolean {
    return this._chain.getCallHash('CrowdloanRewards.associate_native_identity') === '3ad679da14d92159f26c9d481e4b7e4b35561db4abb191ad9108fec3f031907e'
  }

  /**
   * Associate a native rewards_destination identity with a crowdloan contribution.
   * 
   * The caller needs to provide the unassociated relay account and a proof to succeed
   * with the association
   * The proof is nothing but a signature over the reward_address using the relay keys
   */
  get asV900(): {rewardAccount: v900.H160, relayAccount: v900.AccountId32, proof: v900.MultiSignature} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class CrowdloanRewardsChangeAssociationWithRelayKeysCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CrowdloanRewards.change_association_with_relay_keys')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Change reward account by submitting proofs from relay accounts
   * 
   * The number of valid proofs needs to be bigger than 'RewardAddressRelayVoteThreshold'
   * The account to be changed needs to be submitted as 'previous_account'
   * Origin must be RewardAddressChangeOrigin
   */
  get isV900(): boolean {
    return this._chain.getCallHash('CrowdloanRewards.change_association_with_relay_keys') === 'ca57a8a290160af4d4d30796776896b7a11782ee86f8d6c67472275a00ef9f06'
  }

  /**
   * Change reward account by submitting proofs from relay accounts
   * 
   * The number of valid proofs needs to be bigger than 'RewardAddressRelayVoteThreshold'
   * The account to be changed needs to be submitted as 'previous_account'
   * Origin must be RewardAddressChangeOrigin
   */
  get asV900(): {rewardAccount: v900.H160, previousAccount: v900.H160, proofs: [v900.AccountId32, v900.MultiSignature][]} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class CrowdloanRewardsClaimCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CrowdloanRewards.claim')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Collect whatever portion of your reward are currently vested.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('CrowdloanRewards.claim') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Collect whatever portion of your reward are currently vested.
   */
  get asV900(): null {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class CrowdloanRewardsCompleteInitializationCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CrowdloanRewards.complete_initialization')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * This extrinsic completes the initialization if some checks are fullfiled. These checks are:
   *  -The reward contribution money matches the crowdloan pot
   *  -The end vesting block is higher than the init vesting block
   *  -The initialization has not complete yet
   */
  get isV900(): boolean {
    return this._chain.getCallHash('CrowdloanRewards.complete_initialization') === '1dfdc8dc5e830644f6078dce0820b8688f17880bf6a4d4910db9dddca08e9e12'
  }

  /**
   * This extrinsic completes the initialization if some checks are fullfiled. These checks are:
   *  -The reward contribution money matches the crowdloan pot
   *  -The end vesting block is higher than the init vesting block
   *  -The initialization has not complete yet
   */
  get asV900(): {leaseEndingBlock: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class CrowdloanRewardsInitializeRewardVecCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CrowdloanRewards.initialize_reward_vec')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Initialize the reward distribution storage. It shortcuts whenever an error is found
   * This does not enforce any checks other than making sure we dont go over funds
   * complete_initialization should perform any additional
   */
  get isV900(): boolean {
    return this._chain.getCallHash('CrowdloanRewards.initialize_reward_vec') === '7a4c25500fc14d746501ad28af3eae4b9d0db08af29c91d48400ec0257365f86'
  }

  /**
   * Initialize the reward distribution storage. It shortcuts whenever an error is found
   * This does not enforce any checks other than making sure we dont go over funds
   * complete_initialization should perform any additional
   */
  get asV900(): {rewards: [v900.AccountId32, (v900.H160 | undefined), bigint][]} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class CrowdloanRewardsUpdateRewardAddressCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CrowdloanRewards.update_reward_address')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Update reward address, proving that the caller owns the current native key
   */
  get isV900(): boolean {
    return this._chain.getCallHash('CrowdloanRewards.update_reward_address') === 'c2bb313ffe600058f80b59728ef00f6e82b6bf132930799b5fc9dd1d4b679c6d'
  }

  /**
   * Update reward address, proving that the caller owns the current native key
   */
  get asV900(): {newRewardAccount: v900.H160} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyBlacklistCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.blacklist')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Permanently place a proposal into the blacklist. This prevents it from ever being
   * proposed again.
   * 
   * If called on a queued public or external proposal, then this will result in it being
   * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
   * then it will be cancelled.
   * 
   * The dispatch origin of this call must be `BlacklistOrigin`.
   * 
   * - `proposal_hash`: The proposal hash to blacklist permanently.
   * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
   * cancelled.
   * 
   * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
   *   reasonable value).
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.blacklist') === '8d8922c0775adfb1df719211ab4fc6fb40b6cc8864038bcb1b544d9cf039b30a'
  }

  /**
   * Permanently place a proposal into the blacklist. This prevents it from ever being
   * proposed again.
   * 
   * If called on a queued public or external proposal, then this will result in it being
   * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
   * then it will be cancelled.
   * 
   * The dispatch origin of this call must be `BlacklistOrigin`.
   * 
   * - `proposal_hash`: The proposal hash to blacklist permanently.
   * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
   * cancelled.
   * 
   * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
   *   reasonable value).
   */
  get asV900(): {proposalHash: v900.H256, maybeRefIndex: (number | undefined)} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyCancelProposalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.cancel_proposal')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove a proposal.
   * 
   * The dispatch origin of this call must be `CancelProposalOrigin`.
   * 
   * - `prop_index`: The index of the proposal to cancel.
   * 
   * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.cancel_proposal') === '0e50c7564a4a7f4e6a09a0abcc8022f4445c064144d2318ed086e6080bee800d'
  }

  /**
   * Remove a proposal.
   * 
   * The dispatch origin of this call must be `CancelProposalOrigin`.
   * 
   * - `prop_index`: The index of the proposal to cancel.
   * 
   * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
   */
  get asV900(): {propIndex: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyCancelQueuedCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.cancel_queued')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel a proposal queued for enactment.
   * 
   * The dispatch origin of this call must be _Root_.
   * 
   * - `which`: The index of the referendum to cancel.
   * 
   * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.cancel_queued') === '60780274011857b5305b5413b2b4742e5d41eb58a0948049d0672e81af198cb7'
  }

  /**
   * Cancel a proposal queued for enactment.
   * 
   * The dispatch origin of this call must be _Root_.
   * 
   * - `which`: The index of the referendum to cancel.
   * 
   * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
   */
  get asV900(): {which: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyCancelReferendumCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.cancel_referendum')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove a referendum.
   * 
   * The dispatch origin of this call must be _Root_.
   * 
   * - `ref_index`: The index of the referendum to cancel.
   * 
   * # Weight: `O(1)`.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.cancel_referendum') === 'efe4ecff834678ca8b73ea6e2f38e514997eb402e82da2ce4cf036008844a857'
  }

  /**
   * Remove a referendum.
   * 
   * The dispatch origin of this call must be _Root_.
   * 
   * - `ref_index`: The index of the referendum to cancel.
   * 
   * # Weight: `O(1)`.
   */
  get asV900(): {refIndex: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyClearPublicProposalsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.clear_public_proposals')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Clears all public proposals.
   * 
   * The dispatch origin of this call must be _Root_.
   * 
   * Weight: `O(1)`.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.clear_public_proposals') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Clears all public proposals.
   * 
   * The dispatch origin of this call must be _Root_.
   * 
   * Weight: `O(1)`.
   */
  get asV900(): null {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyDelegateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.delegate')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Delegate the voting power (with some given conviction) of the sending account.
   * 
   * The balance delegated is locked for as long as it's delegated, and thereafter for the
   * time appropriate for the conviction's lock period.
   * 
   * The dispatch origin of this call must be _Signed_, and the signing account must either:
   *   - be delegating already; or
   *   - have no voting activity (if there is, then it will need to be removed/consolidated
   *     through `reap_vote` or `unvote`).
   * 
   * - `to`: The account whose voting the `target` account's voting power will follow.
   * - `conviction`: The conviction that will be attached to the delegated votes. When the
   *   account is undelegated, the funds will be locked for the corresponding period.
   * - `balance`: The amount of the account's balance to be used in delegating. This must not
   *   be more than the account's current balance.
   * 
   * Emits `Delegated`.
   * 
   * Weight: `O(R)` where R is the number of referendums the voter delegating to has
   *   voted on. Weight is charged as if maximum votes.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.delegate') === 'ea6d9056c97bede42218d3ea9d4c8633f234aca966d9502b1e8fcd6de60ba33e'
  }

  /**
   * Delegate the voting power (with some given conviction) of the sending account.
   * 
   * The balance delegated is locked for as long as it's delegated, and thereafter for the
   * time appropriate for the conviction's lock period.
   * 
   * The dispatch origin of this call must be _Signed_, and the signing account must either:
   *   - be delegating already; or
   *   - have no voting activity (if there is, then it will need to be removed/consolidated
   *     through `reap_vote` or `unvote`).
   * 
   * - `to`: The account whose voting the `target` account's voting power will follow.
   * - `conviction`: The conviction that will be attached to the delegated votes. When the
   *   account is undelegated, the funds will be locked for the corresponding period.
   * - `balance`: The amount of the account's balance to be used in delegating. This must not
   *   be more than the account's current balance.
   * 
   * Emits `Delegated`.
   * 
   * Weight: `O(R)` where R is the number of referendums the voter delegating to has
   *   voted on. Weight is charged as if maximum votes.
   */
  get asV900(): {to: v900.H160, conviction: v900.Conviction, balance: bigint} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyEmergencyCancelCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.emergency_cancel')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
   * referendum.
   * 
   * The dispatch origin of this call must be `CancellationOrigin`.
   * 
   * -`ref_index`: The index of the referendum to cancel.
   * 
   * Weight: `O(1)`.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.emergency_cancel') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
   * referendum.
   * 
   * The dispatch origin of this call must be `CancellationOrigin`.
   * 
   * -`ref_index`: The index of the referendum to cancel.
   * 
   * Weight: `O(1)`.
   */
  get asV900(): {refIndex: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyEnactProposalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.enact_proposal')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Enact a proposal from a referendum. For now we just make the weight be the maximum.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.enact_proposal') === 'de192ab0f058d1fb7eacc523bf0e05128d16509ec21bf445f0eefa47c89e60bf'
  }

  /**
   * Enact a proposal from a referendum. For now we just make the weight be the maximum.
   */
  get asV900(): {proposalHash: v900.H256, index: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyExternalProposeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.external_propose')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Schedule a referendum to be tabled once it is legal to schedule an external
   * referendum.
   * 
   * The dispatch origin of this call must be `ExternalOrigin`.
   * 
   * - `proposal_hash`: The preimage hash of the proposal.
   * 
   * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
   *   Decoding vec of length V. Charged as maximum
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.external_propose') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * Schedule a referendum to be tabled once it is legal to schedule an external
   * referendum.
   * 
   * The dispatch origin of this call must be `ExternalOrigin`.
   * 
   * - `proposal_hash`: The preimage hash of the proposal.
   * 
   * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
   *   Decoding vec of length V. Charged as maximum
   */
  get asV900(): {proposalHash: v900.H256} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyExternalProposeDefaultCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.external_propose_default')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
   * schedule an external referendum.
   * 
   * The dispatch of this call must be `ExternalDefaultOrigin`.
   * 
   * - `proposal_hash`: The preimage hash of the proposal.
   * 
   * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
   * pre-scheduled `external_propose` call.
   * 
   * Weight: `O(1)`
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.external_propose_default') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
   * schedule an external referendum.
   * 
   * The dispatch of this call must be `ExternalDefaultOrigin`.
   * 
   * - `proposal_hash`: The preimage hash of the proposal.
   * 
   * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
   * pre-scheduled `external_propose` call.
   * 
   * Weight: `O(1)`
   */
  get asV900(): {proposalHash: v900.H256} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyExternalProposeMajorityCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.external_propose_majority')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
   * an external referendum.
   * 
   * The dispatch of this call must be `ExternalMajorityOrigin`.
   * 
   * - `proposal_hash`: The preimage hash of the proposal.
   * 
   * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
   * pre-scheduled `external_propose` call.
   * 
   * Weight: `O(1)`
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.external_propose_majority') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
   * an external referendum.
   * 
   * The dispatch of this call must be `ExternalMajorityOrigin`.
   * 
   * - `proposal_hash`: The preimage hash of the proposal.
   * 
   * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
   * pre-scheduled `external_propose` call.
   * 
   * Weight: `O(1)`
   */
  get asV900(): {proposalHash: v900.H256} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyFastTrackCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.fast_track')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Schedule the currently externally-proposed majority-carries referendum to be tabled
   * immediately. If there is no externally-proposed referendum currently, or if there is one
   * but it is not a majority-carries referendum then it fails.
   * 
   * The dispatch of this call must be `FastTrackOrigin`.
   * 
   * - `proposal_hash`: The hash of the current external proposal.
   * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
   *   `FastTrackVotingPeriod` if too low.
   * - `delay`: The number of block after voting has ended in approval and this should be
   *   enacted. This doesn't have a minimum amount.
   * 
   * Emits `Started`.
   * 
   * Weight: `O(1)`
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.fast_track') === '27cb200e922e485b41e3150b3d7bf5e8624346f6ff1d78601373ba3d80689c89'
  }

  /**
   * Schedule the currently externally-proposed majority-carries referendum to be tabled
   * immediately. If there is no externally-proposed referendum currently, or if there is one
   * but it is not a majority-carries referendum then it fails.
   * 
   * The dispatch of this call must be `FastTrackOrigin`.
   * 
   * - `proposal_hash`: The hash of the current external proposal.
   * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
   *   `FastTrackVotingPeriod` if too low.
   * - `delay`: The number of block after voting has ended in approval and this should be
   *   enacted. This doesn't have a minimum amount.
   * 
   * Emits `Started`.
   * 
   * Weight: `O(1)`
   */
  get asV900(): {proposalHash: v900.H256, votingPeriod: number, delay: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyNoteImminentPreimageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.note_imminent_preimage')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Register the preimage for an upcoming proposal. This requires the proposal to be
   * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
   * the preimage has not been uploaded before and matches some imminent proposal,
   * no fee is paid.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `encoded_proposal`: The preimage of a proposal.
   * 
   * Emits `PreimageNoted`.
   * 
   * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.note_imminent_preimage') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
  }

  /**
   * Register the preimage for an upcoming proposal. This requires the proposal to be
   * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
   * the preimage has not been uploaded before and matches some imminent proposal,
   * no fee is paid.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `encoded_proposal`: The preimage of a proposal.
   * 
   * Emits `PreimageNoted`.
   * 
   * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
   */
  get asV900(): {encodedProposal: Uint8Array} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyNoteImminentPreimageOperationalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.note_imminent_preimage_operational')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.note_imminent_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
  }

  /**
   * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
   */
  get asV900(): {encodedProposal: Uint8Array} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyNotePreimageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.note_preimage')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
   * in the dispatch queue but does require a deposit, returned once enacted.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `encoded_proposal`: The preimage of a proposal.
   * 
   * Emits `PreimageNoted`.
   * 
   * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.note_preimage') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
  }

  /**
   * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
   * in the dispatch queue but does require a deposit, returned once enacted.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `encoded_proposal`: The preimage of a proposal.
   * 
   * Emits `PreimageNoted`.
   * 
   * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
   */
  get asV900(): {encodedProposal: Uint8Array} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyNotePreimageOperationalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.note_preimage_operational')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.note_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
  }

  /**
   * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
   */
  get asV900(): {encodedProposal: Uint8Array} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyProposeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.propose')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Propose a sensitive action to be taken.
   * 
   * The dispatch origin of this call must be _Signed_ and the sender must
   * have funds to cover the deposit.
   * 
   * - `proposal_hash`: The hash of the proposal preimage.
   * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
   * 
   * Emits `Proposed`.
   * 
   * Weight: `O(p)`
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.propose') === '99f964e94c86db2029fab3e54a9230e36fe7533d252b5ecbc36f16c06e11f18b'
  }

  /**
   * Propose a sensitive action to be taken.
   * 
   * The dispatch origin of this call must be _Signed_ and the sender must
   * have funds to cover the deposit.
   * 
   * - `proposal_hash`: The hash of the proposal preimage.
   * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
   * 
   * Emits `Proposed`.
   * 
   * Weight: `O(p)`
   */
  get asV900(): {proposalHash: v900.H256, value: bigint} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyReapPreimageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.reap_preimage')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove an expired proposal preimage and collect the deposit.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `proposal_hash`: The preimage hash of a proposal.
   * - `proposal_length_upper_bound`: an upper bound on length of the proposal. Extrinsic is
   *   weighted according to this value with no refund.
   * 
   * This will only work after `VotingPeriod` blocks from the time that the preimage was
   * noted, if it's the same account doing it. If it's a different account, then it'll only
   * work an additional `EnactmentPeriod` later.
   * 
   * Emits `PreimageReaped`.
   * 
   * Weight: `O(D)` where D is length of proposal.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.reap_preimage') === '23573ffc912e8a31889875352d3543e4538e2f3beb6a89ef86d10cf1cb8b7aca'
  }

  /**
   * Remove an expired proposal preimage and collect the deposit.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `proposal_hash`: The preimage hash of a proposal.
   * - `proposal_length_upper_bound`: an upper bound on length of the proposal. Extrinsic is
   *   weighted according to this value with no refund.
   * 
   * This will only work after `VotingPeriod` blocks from the time that the preimage was
   * noted, if it's the same account doing it. If it's a different account, then it'll only
   * work an additional `EnactmentPeriod` later.
   * 
   * Emits `PreimageReaped`.
   * 
   * Weight: `O(D)` where D is length of proposal.
   */
  get asV900(): {proposalHash: v900.H256, proposalLenUpperBound: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyRemoveOtherVoteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.remove_other_vote')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove a vote for a referendum.
   * 
   * If the `target` is equal to the signer, then this function is exactly equivalent to
   * `remove_vote`. If not equal to the signer, then the vote must have expired,
   * either because the referendum was cancelled, because the voter lost the referendum or
   * because the conviction period is over.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `target`: The account of the vote to be removed; this account must have voted for
   *   referendum `index`.
   * - `index`: The index of referendum of the vote to be removed.
   * 
   * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
   *   Weight is calculated for the maximum number of vote.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.remove_other_vote') === '99f879d671c8ba0ed32f19cf13acb14ab923d50415a4267048e1e58754bc46c9'
  }

  /**
   * Remove a vote for a referendum.
   * 
   * If the `target` is equal to the signer, then this function is exactly equivalent to
   * `remove_vote`. If not equal to the signer, then the vote must have expired,
   * either because the referendum was cancelled, because the voter lost the referendum or
   * because the conviction period is over.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `target`: The account of the vote to be removed; this account must have voted for
   *   referendum `index`.
   * - `index`: The index of referendum of the vote to be removed.
   * 
   * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
   *   Weight is calculated for the maximum number of vote.
   */
  get asV900(): {target: v900.H160, index: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyRemoveVoteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.remove_vote')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove a vote for a referendum.
   * 
   * If:
   * - the referendum was cancelled, or
   * - the referendum is ongoing, or
   * - the referendum has ended such that
   *   - the vote of the account was in opposition to the result; or
   *   - there was no conviction to the account's vote; or
   *   - the account made a split vote
   * ...then the vote is removed cleanly and a following call to `unlock` may result in more
   * funds being available.
   * 
   * If, however, the referendum has ended and:
   * - it finished corresponding to the vote of the account, and
   * - the account made a standard vote with conviction, and
   * - the lock period of the conviction is not over
   * ...then the lock will be aggregated into the overall account's lock, which may involve
   * *overlocking* (where the two locks are combined into a single lock that is the maximum
   * of both the amount locked and the time is it locked for).
   * 
   * The dispatch origin of this call must be _Signed_, and the signer must have a vote
   * registered for referendum `index`.
   * 
   * - `index`: The index of referendum of the vote to be removed.
   * 
   * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
   *   Weight is calculated for the maximum number of vote.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.remove_vote') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * Remove a vote for a referendum.
   * 
   * If:
   * - the referendum was cancelled, or
   * - the referendum is ongoing, or
   * - the referendum has ended such that
   *   - the vote of the account was in opposition to the result; or
   *   - there was no conviction to the account's vote; or
   *   - the account made a split vote
   * ...then the vote is removed cleanly and a following call to `unlock` may result in more
   * funds being available.
   * 
   * If, however, the referendum has ended and:
   * - it finished corresponding to the vote of the account, and
   * - the account made a standard vote with conviction, and
   * - the lock period of the conviction is not over
   * ...then the lock will be aggregated into the overall account's lock, which may involve
   * *overlocking* (where the two locks are combined into a single lock that is the maximum
   * of both the amount locked and the time is it locked for).
   * 
   * The dispatch origin of this call must be _Signed_, and the signer must have a vote
   * registered for referendum `index`.
   * 
   * - `index`: The index of referendum of the vote to be removed.
   * 
   * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
   *   Weight is calculated for the maximum number of vote.
   */
  get asV900(): {index: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracySecondCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.second')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Signals agreement with a particular proposal.
   * 
   * The dispatch origin of this call must be _Signed_ and the sender
   * must have funds to cover the deposit, equal to the original deposit.
   * 
   * - `proposal`: The index of the proposal to second.
   * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
   *   proposal. Extrinsic is weighted according to this value with no refund.
   * 
   * Weight: `O(S)` where S is the number of seconds a proposal already has.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.second') === 'abe1357aae784eefd21f6999076deb6cfbc92fcb9e80c21e93a944ceb739423c'
  }

  /**
   * Signals agreement with a particular proposal.
   * 
   * The dispatch origin of this call must be _Signed_ and the sender
   * must have funds to cover the deposit, equal to the original deposit.
   * 
   * - `proposal`: The index of the proposal to second.
   * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
   *   proposal. Extrinsic is weighted according to this value with no refund.
   * 
   * Weight: `O(S)` where S is the number of seconds a proposal already has.
   */
  get asV900(): {proposal: number, secondsUpperBound: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyUndelegateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.undelegate')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Undelegate the voting power of the sending account.
   * 
   * Tokens may be unlocked following once an amount of time consistent with the lock period
   * of the conviction with which the delegation was issued.
   * 
   * The dispatch origin of this call must be _Signed_ and the signing account must be
   * currently delegating.
   * 
   * Emits `Undelegated`.
   * 
   * Weight: `O(R)` where R is the number of referendums the voter delegating to has
   *   voted on. Weight is charged as if maximum votes.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.undelegate') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Undelegate the voting power of the sending account.
   * 
   * Tokens may be unlocked following once an amount of time consistent with the lock period
   * of the conviction with which the delegation was issued.
   * 
   * The dispatch origin of this call must be _Signed_ and the signing account must be
   * currently delegating.
   * 
   * Emits `Undelegated`.
   * 
   * Weight: `O(R)` where R is the number of referendums the voter delegating to has
   *   voted on. Weight is charged as if maximum votes.
   */
  get asV900(): null {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyUnlockCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.unlock')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Unlock tokens that have an expired lock.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `target`: The account to remove the lock on.
   * 
   * Weight: `O(R)` with R number of vote of target.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.unlock') === '4e7bbc662df5b0d92afee6d2461f7b364aba6652680d4b21677e0ec7806f188c'
  }

  /**
   * Unlock tokens that have an expired lock.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `target`: The account to remove the lock on.
   * 
   * Weight: `O(R)` with R number of vote of target.
   */
  get asV900(): {target: v900.H160} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyVetoExternalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.veto_external')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Veto and blacklist the external proposal hash.
   * 
   * The dispatch origin of this call must be `VetoOrigin`.
   * 
   * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
   * 
   * Emits `Vetoed`.
   * 
   * Weight: `O(V + log(V))` where V is number of `existing vetoers`
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.veto_external') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * Veto and blacklist the external proposal hash.
   * 
   * The dispatch origin of this call must be `VetoOrigin`.
   * 
   * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
   * 
   * Emits `Vetoed`.
   * 
   * Weight: `O(V + log(V))` where V is number of `existing vetoers`
   */
  get asV900(): {proposalHash: v900.H256} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyVoteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.vote')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
   * otherwise it is a vote to keep the status quo.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `ref_index`: The index of the referendum to vote for.
   * - `vote`: The vote configuration.
   * 
   * Weight: `O(R)` where R is the number of referendums the voter has voted on.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Democracy.vote') === '3936a4cb49f77280bd94142d4ec458afcf5cb8a5e5b0d602b1b1530928021e28'
  }

  /**
   * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
   * otherwise it is a vote to keep the status quo.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `ref_index`: The index of the referendum to vote for.
   * - `vote`: The vote configuration.
   * 
   * Weight: `O(R)` where R is the number of referendums the voter has voted on.
   */
  get asV900(): {refIndex: number, vote: v900.AccountVote} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class DmpQueueServiceOverweightCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DmpQueue.service_overweight')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Service a single overweight message.
   * 
   * - `origin`: Must pass `ExecuteOverweightOrigin`.
   * - `index`: The index of the overweight message to service.
   * - `weight_limit`: The amount of weight that message execution may take.
   * 
   * Errors:
   * - `Unknown`: Message of `index` is unknown.
   * - `OverLimit`: Message execution may use greater than `weight_limit`.
   * 
   * Events:
   * - `OverweightServiced`: On success.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('DmpQueue.service_overweight') === 'f6b281f58290b6af96ac2dda36163d81223f37d0a8a100877e2526969a57d772'
  }

  /**
   * Service a single overweight message.
   * 
   * - `origin`: Must pass `ExecuteOverweightOrigin`.
   * - `index`: The index of the overweight message to service.
   * - `weight_limit`: The amount of weight that message execution may take.
   * 
   * Errors:
   * - `Unknown`: Message of `index` is unknown.
   * - `OverLimit`: Message execution may use greater than `weight_limit`.
   * 
   * Events:
   * - `OverweightServiced`: On success.
   */
  get asV1201(): {index: bigint, weightLimit: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class EvmCallCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'EVM.call')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('EVM.call') === 'be311e9b1941397ec5420541a4d014dc6d77d9bcf1314ce021248aeb33a2db1b'
  }

  /**
   * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
   */
  get asV900(): {source: v900.H160, target: v900.H160, input: Uint8Array, value: v900.U256, gasLimit: bigint, gasPrice: v900.U256, nonce: (v900.U256 | undefined)} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('EVM.call') === 'fea29ab5ffa1693ee44fbbd392a433a4a457b2635f51d9dd553c1fa21060fce1'
  }

  /**
   * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
   */
  get asV1201(): {source: v1201.H160, target: v1201.H160, input: Uint8Array, value: v1201.U256, gasLimit: bigint, maxFeePerGas: v1201.U256, maxPriorityFeePerGas: (v1201.U256 | undefined), nonce: (v1201.U256 | undefined), accessList: [v1201.H160, v1201.H256[]][]} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class EvmCreateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'EVM.create')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Issue an EVM create operation. This is similar to a contract creation transaction in
   * Ethereum.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('EVM.create') === 'bd16b46d2686c17b74fb02b78c644a992fce6700740e263605f293f357fe76e0'
  }

  /**
   * Issue an EVM create operation. This is similar to a contract creation transaction in
   * Ethereum.
   */
  get asV900(): {source: v900.H160, init: Uint8Array, value: v900.U256, gasLimit: bigint, gasPrice: v900.U256, nonce: (v900.U256 | undefined)} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Issue an EVM create operation. This is similar to a contract creation transaction in
   * Ethereum.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('EVM.create') === 'd122692f87e80357e86c0556158bc9fa231e58342b38470384eed7023a81eee0'
  }

  /**
   * Issue an EVM create operation. This is similar to a contract creation transaction in
   * Ethereum.
   */
  get asV1201(): {source: v1201.H160, init: Uint8Array, value: v1201.U256, gasLimit: bigint, maxFeePerGas: v1201.U256, maxPriorityFeePerGas: (v1201.U256 | undefined), nonce: (v1201.U256 | undefined), accessList: [v1201.H160, v1201.H256[]][]} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class EvmCreate2Call {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'EVM.create2')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Issue an EVM create2 operation.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('EVM.create2') === 'fb50bbcffc045eb16c17783925df9b3e1936c765f5dd69c88a438ddf8fc7707c'
  }

  /**
   * Issue an EVM create2 operation.
   */
  get asV900(): {source: v900.H160, init: Uint8Array, salt: v900.H256, value: v900.U256, gasLimit: bigint, gasPrice: v900.U256, nonce: (v900.U256 | undefined)} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Issue an EVM create2 operation.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('EVM.create2') === '321816f7d3da365d11a9a8e1f13766967072f27fb142d2024371d3a9dd053be8'
  }

  /**
   * Issue an EVM create2 operation.
   */
  get asV1201(): {source: v1201.H160, init: Uint8Array, salt: v1201.H256, value: v1201.U256, gasLimit: bigint, maxFeePerGas: v1201.U256, maxPriorityFeePerGas: (v1201.U256 | undefined), nonce: (v1201.U256 | undefined), accessList: [v1201.H160, v1201.H256[]][]} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class EvmHotfixIncAccountSufficientsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'EVM.hotfix_inc_account_sufficients')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Increment `sufficients` for existing accounts having a nonzero `nonce` but zero `sufficients` value.
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('EVM.hotfix_inc_account_sufficients') === 'e368b92ea67bc2b182782fa8f2aee8e839404c3635495666aa053956718d32c8'
  }

  /**
   * Increment `sufficients` for existing accounts having a nonzero `nonce` but zero `sufficients` value.
   */
  get asV1401(): {addresses: v1401.H160[]} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class EvmWithdrawCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'EVM.withdraw')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Withdraw balance from EVM into currency/balances pallet.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('EVM.withdraw') === '6213607a84a4a3aa47d755efc366f94b81dbbfa3fe175ebac796707949240fdb'
  }

  /**
   * Withdraw balance from EVM into currency/balances pallet.
   */
  get asV900(): {address: v900.H160, value: bigint} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class EthereumTransactCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Ethereum.transact')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transact an Ethereum transaction.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Ethereum.transact') === '27ed559a6856e5085900eccf20290c958992ff554f041fdc4516e405fc8ddb97'
  }

  /**
   * Transact an Ethereum transaction.
   */
  get asV900(): {transaction: v900.LegacyTransaction} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Transact an Ethereum transaction.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Ethereum.transact') === '141b9fbf21429ca5123d8cd59859311499b6d8eb06fdd0a71b9b4b097e14a234'
  }

  /**
   * Transact an Ethereum transaction.
   */
  get asV1201(): {transaction: v1201.TransactionV2} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityAddRegistrarCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.add_registrar')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Add a registrar to the system.
   * 
   * The dispatch origin for this call must be `T::RegistrarOrigin`.
   * 
   * - `account`: the account of the registrar.
   * 
   * Emits `RegistrarAdded` if successful.
   * 
   * # <weight>
   * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
   * - One storage mutation (codec `O(R)`).
   * - One event.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Identity.add_registrar') === '041e3c99c7373645533b0a38437f03393c46e1c811b17689bc2c51c0b6784c09'
  }

  /**
   * Add a registrar to the system.
   * 
   * The dispatch origin for this call must be `T::RegistrarOrigin`.
   * 
   * - `account`: the account of the registrar.
   * 
   * Emits `RegistrarAdded` if successful.
   * 
   * # <weight>
   * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
   * - One storage mutation (codec `O(R)`).
   * - One event.
   * # </weight>
   */
  get asV900(): {account: v900.H160} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityAddSubCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.add_sub')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Add the given account to the sender's subs.
   * 
   * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
   * to the sender.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * sub identity of `sub`.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Identity.add_sub') === '8c9b74815820921a2118d92c84fea50cfda69c09eb06d7d649eed5de2a8f44a5'
  }

  /**
   * Add the given account to the sender's subs.
   * 
   * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
   * to the sender.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * sub identity of `sub`.
   */
  get asV900(): {sub: v900.H160, data: v900.Data} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityCancelRequestCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.cancel_request')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel a previous request.
   * 
   * Payment: A previously reserved deposit is returned on success.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a
   * registered identity.
   * 
   * - `reg_index`: The index of the registrar whose judgement is no longer requested.
   * 
   * Emits `JudgementUnrequested` if successful.
   * 
   * # <weight>
   * - `O(R + X)`.
   * - One balance-reserve operation.
   * - One storage mutation `O(R + X)`.
   * - One event
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Identity.cancel_request') === '89d659d6a17ba36d0dfc7c90a7f043581d7fe980043895169d7dda1416ff7e5b'
  }

  /**
   * Cancel a previous request.
   * 
   * Payment: A previously reserved deposit is returned on success.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a
   * registered identity.
   * 
   * - `reg_index`: The index of the registrar whose judgement is no longer requested.
   * 
   * Emits `JudgementUnrequested` if successful.
   * 
   * # <weight>
   * - `O(R + X)`.
   * - One balance-reserve operation.
   * - One storage mutation `O(R + X)`.
   * - One event
   * # </weight>
   */
  get asV900(): {regIndex: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityClearIdentityCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.clear_identity')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Clear an account's identity info and all sub-accounts and return all deposits.
   * 
   * Payment: All reserved balances on the account are returned.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * identity.
   * 
   * Emits `IdentityCleared` if successful.
   * 
   * # <weight>
   * - `O(R + S + X)`
   *   - where `R` registrar-count (governance-bounded).
   *   - where `S` subs-count (hard- and deposit-bounded).
   *   - where `X` additional-field-count (deposit-bounded and code-bounded).
   * - One balance-unreserve operation.
   * - `2` storage reads and `S + 2` storage deletions.
   * - One event.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Identity.clear_identity') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Clear an account's identity info and all sub-accounts and return all deposits.
   * 
   * Payment: All reserved balances on the account are returned.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * identity.
   * 
   * Emits `IdentityCleared` if successful.
   * 
   * # <weight>
   * - `O(R + S + X)`
   *   - where `R` registrar-count (governance-bounded).
   *   - where `S` subs-count (hard- and deposit-bounded).
   *   - where `X` additional-field-count (deposit-bounded and code-bounded).
   * - One balance-unreserve operation.
   * - `2` storage reads and `S + 2` storage deletions.
   * - One event.
   * # </weight>
   */
  get asV900(): null {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityKillIdentityCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.kill_identity')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove an account's identity and sub-account information and slash the deposits.
   * 
   * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
   * `Slash`. Verification request deposits are not returned; they should be cancelled
   * manually using `cancel_request`.
   * 
   * The dispatch origin for this call must match `T::ForceOrigin`.
   * 
   * - `target`: the account whose identity the judgement is upon. This must be an account
   *   with a registered identity.
   * 
   * Emits `IdentityKilled` if successful.
   * 
   * # <weight>
   * - `O(R + S + X)`.
   * - One balance-reserve operation.
   * - `S + 2` storage mutations.
   * - One event.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Identity.kill_identity') === '4e7bbc662df5b0d92afee6d2461f7b364aba6652680d4b21677e0ec7806f188c'
  }

  /**
   * Remove an account's identity and sub-account information and slash the deposits.
   * 
   * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
   * `Slash`. Verification request deposits are not returned; they should be cancelled
   * manually using `cancel_request`.
   * 
   * The dispatch origin for this call must match `T::ForceOrigin`.
   * 
   * - `target`: the account whose identity the judgement is upon. This must be an account
   *   with a registered identity.
   * 
   * Emits `IdentityKilled` if successful.
   * 
   * # <weight>
   * - `O(R + S + X)`.
   * - One balance-reserve operation.
   * - `S + 2` storage mutations.
   * - One event.
   * # </weight>
   */
  get asV900(): {target: v900.H160} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityProvideJudgementCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.provide_judgement')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Provide a judgement for an account's identity.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must be the account
   * of the registrar whose index is `reg_index`.
   * 
   * - `reg_index`: the index of the registrar whose judgement is being made.
   * - `target`: the account whose identity the judgement is upon. This must be an account
   *   with a registered identity.
   * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
   * 
   * Emits `JudgementGiven` if successful.
   * 
   * # <weight>
   * - `O(R + X)`.
   * - One balance-transfer operation.
   * - Up to one account-lookup operation.
   * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
   * - One event.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Identity.provide_judgement') === '036d2d5cb43a8b4bbc8f28f28d050ccd3ad64c2509727a16a9e26da1813f9225'
  }

  /**
   * Provide a judgement for an account's identity.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must be the account
   * of the registrar whose index is `reg_index`.
   * 
   * - `reg_index`: the index of the registrar whose judgement is being made.
   * - `target`: the account whose identity the judgement is upon. This must be an account
   *   with a registered identity.
   * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
   * 
   * Emits `JudgementGiven` if successful.
   * 
   * # <weight>
   * - `O(R + X)`.
   * - One balance-transfer operation.
   * - Up to one account-lookup operation.
   * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
   * - One event.
   * # </weight>
   */
  get asV900(): {regIndex: number, target: v900.H160, judgement: v900.Judgement} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityQuitSubCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.quit_sub')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove the sender as a sub-account.
   * 
   * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
   * to the sender (*not* the original depositor).
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * super-identity.
   * 
   * NOTE: This should not normally be used, but is provided in the case that the non-
   * controller of an account is maliciously registered as a sub-account.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Identity.quit_sub') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Remove the sender as a sub-account.
   * 
   * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
   * to the sender (*not* the original depositor).
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * super-identity.
   * 
   * NOTE: This should not normally be used, but is provided in the case that the non-
   * controller of an account is maliciously registered as a sub-account.
   */
  get asV900(): null {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityRemoveSubCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.remove_sub')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove the given account from the sender's subs.
   * 
   * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
   * to the sender.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * sub identity of `sub`.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Identity.remove_sub') === 'ce8eb3346c11c6b0d611cfac29ea6051385e23ea9b242a4ecc397eb882b51704'
  }

  /**
   * Remove the given account from the sender's subs.
   * 
   * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
   * to the sender.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * sub identity of `sub`.
   */
  get asV900(): {sub: v900.H160} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityRenameSubCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.rename_sub')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Alter the associated name of the given sub-account.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * sub identity of `sub`.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Identity.rename_sub') === '8c9b74815820921a2118d92c84fea50cfda69c09eb06d7d649eed5de2a8f44a5'
  }

  /**
   * Alter the associated name of the given sub-account.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * sub identity of `sub`.
   */
  get asV900(): {sub: v900.H160, data: v900.Data} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityRequestJudgementCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.request_judgement')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Request a judgement from a registrar.
   * 
   * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
   * given.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a
   * registered identity.
   * 
   * - `reg_index`: The index of the registrar whose judgement is requested.
   * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
   * 
   * ```nocompile
   * Self::registrars().get(reg_index).unwrap().fee
   * ```
   * 
   * Emits `JudgementRequested` if successful.
   * 
   * # <weight>
   * - `O(R + X)`.
   * - One balance-reserve operation.
   * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
   * - One event.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Identity.request_judgement') === 'c6336282cbe5b8ccf3769cc13c92f532be2499335e3d52ebf566a888e92b5b7c'
  }

  /**
   * Request a judgement from a registrar.
   * 
   * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
   * given.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a
   * registered identity.
   * 
   * - `reg_index`: The index of the registrar whose judgement is requested.
   * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
   * 
   * ```nocompile
   * Self::registrars().get(reg_index).unwrap().fee
   * ```
   * 
   * Emits `JudgementRequested` if successful.
   * 
   * # <weight>
   * - `O(R + X)`.
   * - One balance-reserve operation.
   * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
   * - One event.
   * # </weight>
   */
  get asV900(): {regIndex: number, maxFee: bigint} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentitySetAccountIdCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.set_account_id')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Change the account associated with a registrar.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must be the account
   * of the registrar whose index is `index`.
   * 
   * - `index`: the index of the registrar whose fee is to be set.
   * - `new`: the new account ID.
   * 
   * # <weight>
   * - `O(R)`.
   * - One storage mutation `O(R)`.
   * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Identity.set_account_id') === '5d50364a48effecaab4f2e516176f597d566d5c4512c9980844899b56b9551ad'
  }

  /**
   * Change the account associated with a registrar.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must be the account
   * of the registrar whose index is `index`.
   * 
   * - `index`: the index of the registrar whose fee is to be set.
   * - `new`: the new account ID.
   * 
   * # <weight>
   * - `O(R)`.
   * - One storage mutation `O(R)`.
   * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
   * # </weight>
   */
  get asV900(): {index: number, new: v900.H160} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentitySetFeeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.set_fee')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the fee required for a judgement to be requested from a registrar.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must be the account
   * of the registrar whose index is `index`.
   * 
   * - `index`: the index of the registrar whose fee is to be set.
   * - `fee`: the new fee.
   * 
   * # <weight>
   * - `O(R)`.
   * - One storage mutation `O(R)`.
   * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Identity.set_fee') === '6418458414c3cef3d5c80c88232d781e76733c675303b2937b9cd30ae58d0fe4'
  }

  /**
   * Set the fee required for a judgement to be requested from a registrar.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must be the account
   * of the registrar whose index is `index`.
   * 
   * - `index`: the index of the registrar whose fee is to be set.
   * - `fee`: the new fee.
   * 
   * # <weight>
   * - `O(R)`.
   * - One storage mutation `O(R)`.
   * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
   * # </weight>
   */
  get asV900(): {index: number, fee: bigint} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentitySetFieldsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.set_fields')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the field information for a registrar.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must be the account
   * of the registrar whose index is `index`.
   * 
   * - `index`: the index of the registrar whose fee is to be set.
   * - `fields`: the fields that the registrar concerns themselves with.
   * 
   * # <weight>
   * - `O(R)`.
   * - One storage mutation `O(R)`.
   * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Identity.set_fields') === 'b2c8998acd304e28e4f4a78e6a07f5bf7caf587532734dbd94b85c01a31c3e13'
  }

  /**
   * Set the field information for a registrar.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must be the account
   * of the registrar whose index is `index`.
   * 
   * - `index`: the index of the registrar whose fee is to be set.
   * - `fields`: the fields that the registrar concerns themselves with.
   * 
   * # <weight>
   * - `O(R)`.
   * - One storage mutation `O(R)`.
   * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
   * # </weight>
   */
  get asV900(): {index: number, fields: v900.BitFlags} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentitySetIdentityCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.set_identity')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set an account's identity information and reserve the appropriate deposit.
   * 
   * If the account already has identity information, the deposit is taken as part payment
   * for the new deposit.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `info`: The identity information.
   * 
   * Emits `IdentitySet` if successful.
   * 
   * # <weight>
   * - `O(X + X' + R)`
   *   - where `X` additional-field-count (deposit-bounded and code-bounded)
   *   - where `R` judgements-count (registrar-count-bounded)
   * - One balance reserve operation.
   * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
   * - One event.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Identity.set_identity') === 'ab457704fd8cda5fee32e84ab7782778f4117cd54400c364cf7597eee5bc60ca'
  }

  /**
   * Set an account's identity information and reserve the appropriate deposit.
   * 
   * If the account already has identity information, the deposit is taken as part payment
   * for the new deposit.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * - `info`: The identity information.
   * 
   * Emits `IdentitySet` if successful.
   * 
   * # <weight>
   * - `O(X + X' + R)`
   *   - where `X` additional-field-count (deposit-bounded and code-bounded)
   *   - where `R` judgements-count (registrar-count-bounded)
   * - One balance reserve operation.
   * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
   * - One event.
   * # </weight>
   */
  get asV900(): {info: v900.IdentityInfo} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentitySetSubsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.set_subs')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the sub-accounts of the sender.
   * 
   * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
   * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * identity.
   * 
   * - `subs`: The identity's (new) sub-accounts.
   * 
   * # <weight>
   * - `O(P + S)`
   *   - where `P` old-subs-count (hard- and deposit-bounded).
   *   - where `S` subs-count (hard- and deposit-bounded).
   * - At most one balance operations.
   * - DB:
   *   - `P + S` storage mutations (codec complexity `O(1)`)
   *   - One storage read (codec complexity `O(P)`).
   *   - One storage write (codec complexity `O(S)`).
   *   - One storage-exists (`IdentityOf::contains_key`).
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Identity.set_subs') === 'e94f6aa1cb4c6f2954822491c26a913828641e8f6b749c5c68ddc94599fd5dda'
  }

  /**
   * Set the sub-accounts of the sender.
   * 
   * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
   * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * identity.
   * 
   * - `subs`: The identity's (new) sub-accounts.
   * 
   * # <weight>
   * - `O(P + S)`
   *   - where `P` old-subs-count (hard- and deposit-bounded).
   *   - where `S` subs-count (hard- and deposit-bounded).
   * - At most one balance operations.
   * - DB:
   *   - `P + S` storage mutations (codec complexity `O(1)`)
   *   - One storage read (codec complexity `O(P)`).
   *   - One storage write (codec complexity `O(S)`).
   *   - One storage-exists (`IdentityOf::contains_key`).
   * # </weight>
   */
  get asV900(): {subs: [v900.H160, v900.Data][]} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsApproveTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.approve_transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Approve an amount of asset for transfer by a delegated third-party account.
   * 
   * Origin must be Signed.
   * 
   * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
   * for the purpose of holding the approval. If some non-zero amount of assets is already
   * approved from signing account to `delegate`, then it is topped up or unreserved to
   * meet the right value.
   * 
   * NOTE: The signing account does not need to own `amount` of assets at the point of
   * making this call.
   * 
   * - `id`: The identifier of the asset.
   * - `delegate`: The account to delegate permission to transfer asset.
   * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
   * already an approval in place, then this acts additively.
   * 
   * Emits `ApprovedTransfer` on success.
   * 
   * Weight: `O(1)`
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.approve_transfer') === '4db3d28cfcd3b3fc4e84a5e4a62834eb281e6d67424bf1b5029094ab8d8241ac'
  }

  /**
   * Approve an amount of asset for transfer by a delegated third-party account.
   * 
   * Origin must be Signed.
   * 
   * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
   * for the purpose of holding the approval. If some non-zero amount of assets is already
   * approved from signing account to `delegate`, then it is topped up or unreserved to
   * meet the right value.
   * 
   * NOTE: The signing account does not need to own `amount` of assets at the point of
   * making this call.
   * 
   * - `id`: The identifier of the asset.
   * - `delegate`: The account to delegate permission to transfer asset.
   * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
   * already an approval in place, then this acts additively.
   * 
   * Emits `ApprovedTransfer` on success.
   * 
   * Weight: `O(1)`
   */
  get asV1401(): {id: bigint, delegate: v1401.AccountId20, amount: bigint} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsBurnCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.burn')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
   * 
   * Origin must be Signed and the sender should be the Manager of the asset `id`.
   * 
   * Bails with `NoAccount` if the `who` is already dead.
   * 
   * - `id`: The identifier of the asset to have some amount burned.
   * - `who`: The account to be debited from.
   * - `amount`: The maximum amount by which `who`'s balance should be reduced.
   * 
   * Emits `Burned` with the actual amount burned. If this takes the balance to below the
   * minimum for the asset, then the amount burned is increased to take it to zero.
   * 
   * Weight: `O(1)`
   * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.burn') === '4cad641cee50c15107b9540a3ce93683e97f083d298b9610cc5e7eadb4dd02ad'
  }

  /**
   * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
   * 
   * Origin must be Signed and the sender should be the Manager of the asset `id`.
   * 
   * Bails with `NoAccount` if the `who` is already dead.
   * 
   * - `id`: The identifier of the asset to have some amount burned.
   * - `who`: The account to be debited from.
   * - `amount`: The maximum amount by which `who`'s balance should be reduced.
   * 
   * Emits `Burned` with the actual amount burned. If this takes the balance to below the
   * minimum for the asset, then the amount burned is increased to take it to zero.
   * 
   * Weight: `O(1)`
   * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
   */
  get asV1401(): {id: bigint, who: v1401.AccountId20, amount: bigint} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsCancelApprovalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.cancel_approval')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel all of some asset approved for delegated transfer by a third-party account.
   * 
   * Origin must be Signed and there must be an approval in place between signer and
   * `delegate`.
   * 
   * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
   * 
   * - `id`: The identifier of the asset.
   * - `delegate`: The account delegated permission to transfer asset.
   * 
   * Emits `ApprovalCancelled` on success.
   * 
   * Weight: `O(1)`
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.cancel_approval') === 'da4d3513855c372fc5f3fdabcefb88dbb890318c6eaf56cd1dc98bd7bfb3c83b'
  }

  /**
   * Cancel all of some asset approved for delegated transfer by a third-party account.
   * 
   * Origin must be Signed and there must be an approval in place between signer and
   * `delegate`.
   * 
   * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
   * 
   * - `id`: The identifier of the asset.
   * - `delegate`: The account delegated permission to transfer asset.
   * 
   * Emits `ApprovalCancelled` on success.
   * 
   * Weight: `O(1)`
   */
  get asV1401(): {id: bigint, delegate: v1401.AccountId20} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsClearMetadataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.clear_metadata')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Clear the metadata for an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * Any deposit is freed for the asset owner.
   * 
   * - `id`: The identifier of the asset to clear.
   * 
   * Emits `MetadataCleared`.
   * 
   * Weight: `O(1)`
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.clear_metadata') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
  }

  /**
   * Clear the metadata for an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * Any deposit is freed for the asset owner.
   * 
   * - `id`: The identifier of the asset to clear.
   * 
   * Emits `MetadataCleared`.
   * 
   * Weight: `O(1)`
   */
  get asV1401(): {id: bigint} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsCreateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.create')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Issue a new class of fungible assets from a public origin.
   * 
   * This new asset class has no assets initially and its owner is the origin.
   * 
   * The origin must be Signed and the sender must have sufficient funds free.
   * 
   * Funds of sender are reserved by `AssetDeposit`.
   * 
   * Parameters:
   * - `id`: The identifier of the new asset. This must not be currently in use to identify
   * an existing asset.
   * - `admin`: The admin of this class of assets. The admin is the initial address of each
   * member of the asset class's admin team.
   * - `min_balance`: The minimum balance of this new asset that any single account must
   * have. If an account's balance is reduced below this, then it collapses to zero.
   * 
   * Emits `Created` event when successful.
   * 
   * Weight: `O(1)`
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.create') === 'fe010eb678d9a2ed54cfc0dad639a9e77d6e8654f1b6469af70d62c44ce92f4f'
  }

  /**
   * Issue a new class of fungible assets from a public origin.
   * 
   * This new asset class has no assets initially and its owner is the origin.
   * 
   * The origin must be Signed and the sender must have sufficient funds free.
   * 
   * Funds of sender are reserved by `AssetDeposit`.
   * 
   * Parameters:
   * - `id`: The identifier of the new asset. This must not be currently in use to identify
   * an existing asset.
   * - `admin`: The admin of this class of assets. The admin is the initial address of each
   * member of the asset class's admin team.
   * - `min_balance`: The minimum balance of this new asset that any single account must
   * have. If an account's balance is reduced below this, then it collapses to zero.
   * 
   * Emits `Created` event when successful.
   * 
   * Weight: `O(1)`
   */
  get asV1401(): {id: bigint, admin: v1401.AccountId20, minBalance: bigint} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsDestroyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.destroy')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Destroy a class of fungible assets.
   * 
   * The origin must conform to `ForceOrigin` or must be Signed and the sender must be the
   * owner of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be destroyed. This must identify an existing
   * asset.
   * 
   * Emits `Destroyed` event when successful.
   * 
   * NOTE: It can be helpful to first freeze an asset before destroying it so that you
   * can provide accurate witness information and prevent users from manipulating state
   * in a way that can make it harder to destroy.
   * 
   * Weight: `O(c + p + a)` where:
   * - `c = (witness.accounts - witness.sufficients)`
   * - `s = witness.sufficients`
   * - `a = witness.approvals`
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.destroy') === '9a8a5a90459d4fa03bad7d8dc11eed0c6acdd779939cd82a16cebc1973a19f8c'
  }

  /**
   * Destroy a class of fungible assets.
   * 
   * The origin must conform to `ForceOrigin` or must be Signed and the sender must be the
   * owner of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be destroyed. This must identify an existing
   * asset.
   * 
   * Emits `Destroyed` event when successful.
   * 
   * NOTE: It can be helpful to first freeze an asset before destroying it so that you
   * can provide accurate witness information and prevent users from manipulating state
   * in a way that can make it harder to destroy.
   * 
   * Weight: `O(c + p + a)` where:
   * - `c = (witness.accounts - witness.sufficients)`
   * - `s = witness.sufficients`
   * - `a = witness.approvals`
   */
  get asV1401(): {id: bigint, witness: v1401.DestroyWitness} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsForceAssetStatusCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.force_asset_status')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Alter the attributes of a given asset.
   * 
   * Origin must be `ForceOrigin`.
   * 
   * - `id`: The identifier of the asset.
   * - `owner`: The new Owner of this asset.
   * - `issuer`: The new Issuer of this asset.
   * - `admin`: The new Admin of this asset.
   * - `freezer`: The new Freezer of this asset.
   * - `min_balance`: The minimum balance of this new asset that any single account must
   * have. If an account's balance is reduced below this, then it collapses to zero.
   * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
   * value to account for the state bloat associated with its balance storage. If set to
   * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
   * an ED in the Balances pallet or whatever else is used to control user-account state
   * growth).
   * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
   * instructions.
   * 
   * Emits `AssetStatusChanged` with the identity of the asset.
   * 
   * Weight: `O(1)`
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.force_asset_status') === '4064a4a429c6658c75f2ecb2650525c8f334004bd4f02f209725cdb577806610'
  }

  /**
   * Alter the attributes of a given asset.
   * 
   * Origin must be `ForceOrigin`.
   * 
   * - `id`: The identifier of the asset.
   * - `owner`: The new Owner of this asset.
   * - `issuer`: The new Issuer of this asset.
   * - `admin`: The new Admin of this asset.
   * - `freezer`: The new Freezer of this asset.
   * - `min_balance`: The minimum balance of this new asset that any single account must
   * have. If an account's balance is reduced below this, then it collapses to zero.
   * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
   * value to account for the state bloat associated with its balance storage. If set to
   * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
   * an ED in the Balances pallet or whatever else is used to control user-account state
   * growth).
   * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
   * instructions.
   * 
   * Emits `AssetStatusChanged` with the identity of the asset.
   * 
   * Weight: `O(1)`
   */
  get asV1401(): {id: bigint, owner: v1401.AccountId20, issuer: v1401.AccountId20, admin: v1401.AccountId20, freezer: v1401.AccountId20, minBalance: bigint, isSufficient: boolean, isFrozen: boolean} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsForceCancelApprovalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.force_cancel_approval')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel all of some asset approved for delegated transfer by a third-party account.
   * 
   * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
   * account of the asset `id`.
   * 
   * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
   * 
   * - `id`: The identifier of the asset.
   * - `delegate`: The account delegated permission to transfer asset.
   * 
   * Emits `ApprovalCancelled` on success.
   * 
   * Weight: `O(1)`
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.force_cancel_approval') === 'a95a8723eac71ce3250ae31053dc4de053e760b119f476d503db1f7abb9c75b6'
  }

  /**
   * Cancel all of some asset approved for delegated transfer by a third-party account.
   * 
   * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
   * account of the asset `id`.
   * 
   * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
   * 
   * - `id`: The identifier of the asset.
   * - `delegate`: The account delegated permission to transfer asset.
   * 
   * Emits `ApprovalCancelled` on success.
   * 
   * Weight: `O(1)`
   */
  get asV1401(): {id: bigint, owner: v1401.AccountId20, delegate: v1401.AccountId20} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsForceClearMetadataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.force_clear_metadata')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Clear the metadata for an asset.
   * 
   * Origin must be ForceOrigin.
   * 
   * Any deposit is returned.
   * 
   * - `id`: The identifier of the asset to clear.
   * 
   * Emits `MetadataCleared`.
   * 
   * Weight: `O(1)`
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.force_clear_metadata') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
  }

  /**
   * Clear the metadata for an asset.
   * 
   * Origin must be ForceOrigin.
   * 
   * Any deposit is returned.
   * 
   * - `id`: The identifier of the asset to clear.
   * 
   * Emits `MetadataCleared`.
   * 
   * Weight: `O(1)`
   */
  get asV1401(): {id: bigint} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsForceCreateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.force_create')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Issue a new class of fungible assets from a privileged origin.
   * 
   * This new asset class has no assets initially.
   * 
   * The origin must conform to `ForceOrigin`.
   * 
   * Unlike `create`, no funds are reserved.
   * 
   * - `id`: The identifier of the new asset. This must not be currently in use to identify
   * an existing asset.
   * - `owner`: The owner of this class of assets. The owner has full superuser permissions
   * over this asset, but may later change and configure the permissions using
   * `transfer_ownership` and `set_team`.
   * - `min_balance`: The minimum balance of this new asset that any single account must
   * have. If an account's balance is reduced below this, then it collapses to zero.
   * 
   * Emits `ForceCreated` event when successful.
   * 
   * Weight: `O(1)`
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.force_create') === 'afadf2f20b7327e34f814f72f8361431e52a89b983a4c4efc04feec2821019a8'
  }

  /**
   * Issue a new class of fungible assets from a privileged origin.
   * 
   * This new asset class has no assets initially.
   * 
   * The origin must conform to `ForceOrigin`.
   * 
   * Unlike `create`, no funds are reserved.
   * 
   * - `id`: The identifier of the new asset. This must not be currently in use to identify
   * an existing asset.
   * - `owner`: The owner of this class of assets. The owner has full superuser permissions
   * over this asset, but may later change and configure the permissions using
   * `transfer_ownership` and `set_team`.
   * - `min_balance`: The minimum balance of this new asset that any single account must
   * have. If an account's balance is reduced below this, then it collapses to zero.
   * 
   * Emits `ForceCreated` event when successful.
   * 
   * Weight: `O(1)`
   */
  get asV1401(): {id: bigint, owner: v1401.AccountId20, isSufficient: boolean, minBalance: bigint} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsForceSetMetadataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.force_set_metadata')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Force the metadata for an asset to some value.
   * 
   * Origin must be ForceOrigin.
   * 
   * Any deposit is left alone.
   * 
   * - `id`: The identifier of the asset to update.
   * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
   * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
   * - `decimals`: The number of decimals this asset uses to represent one unit.
   * 
   * Emits `MetadataSet`.
   * 
   * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.force_set_metadata') === '5197c4dc1b19808caa5eb6363c6d281dc29fc658a2124f3030ba4e8886e36135'
  }

  /**
   * Force the metadata for an asset to some value.
   * 
   * Origin must be ForceOrigin.
   * 
   * Any deposit is left alone.
   * 
   * - `id`: The identifier of the asset to update.
   * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
   * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
   * - `decimals`: The number of decimals this asset uses to represent one unit.
   * 
   * Emits `MetadataSet`.
   * 
   * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
   */
  get asV1401(): {id: bigint, name: Uint8Array, symbol: Uint8Array, decimals: number, isFrozen: boolean} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsForceTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.force_transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Move some assets from one account to another.
   * 
   * Origin must be Signed and the sender should be the Admin of the asset `id`.
   * 
   * - `id`: The identifier of the asset to have some amount transferred.
   * - `source`: The account to be debited.
   * - `dest`: The account to be credited.
   * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
   * `dest`'s balance increased. The amount actually transferred may be slightly greater in
   * the case that the transfer would otherwise take the `source` balance above zero but
   * below the minimum balance. Must be greater than zero.
   * 
   * Emits `Transferred` with the actual amount transferred. If this takes the source balance
   * to below the minimum for the asset, then the amount transferred is increased to take it
   * to zero.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
   * `dest`.
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.force_transfer') === '4f40d207d46901d797decd85bf982182b8f5f2085e80de9179773ff8bf82c71a'
  }

  /**
   * Move some assets from one account to another.
   * 
   * Origin must be Signed and the sender should be the Admin of the asset `id`.
   * 
   * - `id`: The identifier of the asset to have some amount transferred.
   * - `source`: The account to be debited.
   * - `dest`: The account to be credited.
   * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
   * `dest`'s balance increased. The amount actually transferred may be slightly greater in
   * the case that the transfer would otherwise take the `source` balance above zero but
   * below the minimum balance. Must be greater than zero.
   * 
   * Emits `Transferred` with the actual amount transferred. If this takes the source balance
   * to below the minimum for the asset, then the amount transferred is increased to take it
   * to zero.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
   * `dest`.
   */
  get asV1401(): {id: bigint, source: v1401.AccountId20, dest: v1401.AccountId20, amount: bigint} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsFreezeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.freeze')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Disallow further unprivileged transfers from an account.
   * 
   * Origin must be Signed and the sender should be the Freezer of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * - `who`: The account to be frozen.
   * 
   * Emits `Frozen`.
   * 
   * Weight: `O(1)`
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.freeze') === 'e23174d6525e73918f65f8c3a09c76bd3023dc877957609c34e922c32c67b405'
  }

  /**
   * Disallow further unprivileged transfers from an account.
   * 
   * Origin must be Signed and the sender should be the Freezer of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * - `who`: The account to be frozen.
   * 
   * Emits `Frozen`.
   * 
   * Weight: `O(1)`
   */
  get asV1401(): {id: bigint, who: v1401.AccountId20} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsFreezeAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.freeze_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Disallow further unprivileged transfers for the asset class.
   * 
   * Origin must be Signed and the sender should be the Freezer of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * 
   * Emits `Frozen`.
   * 
   * Weight: `O(1)`
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.freeze_asset') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
  }

  /**
   * Disallow further unprivileged transfers for the asset class.
   * 
   * Origin must be Signed and the sender should be the Freezer of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * 
   * Emits `Frozen`.
   * 
   * Weight: `O(1)`
   */
  get asV1401(): {id: bigint} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsMintCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.mint')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Mint assets of a particular class.
   * 
   * The origin must be Signed and the sender must be the Issuer of the asset `id`.
   * 
   * - `id`: The identifier of the asset to have some amount minted.
   * - `beneficiary`: The account to be credited with the minted assets.
   * - `amount`: The amount of the asset to be minted.
   * 
   * Emits `Issued` event when successful.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.mint') === '080fb5d43492845552a936c54bfa735df1176f153ceef4cec8ea6464ba48734f'
  }

  /**
   * Mint assets of a particular class.
   * 
   * The origin must be Signed and the sender must be the Issuer of the asset `id`.
   * 
   * - `id`: The identifier of the asset to have some amount minted.
   * - `beneficiary`: The account to be credited with the minted assets.
   * - `amount`: The amount of the asset to be minted.
   * 
   * Emits `Issued` event when successful.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
   */
  get asV1401(): {id: bigint, beneficiary: v1401.AccountId20, amount: bigint} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsRefundCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.refund')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Return the deposit (if any) of an asset account.
   * 
   * The origin must be Signed.
   * 
   * - `id`: The identifier of the asset for the account to be created.
   * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
   * 
   * Emits `Refunded` event when successful.
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.refund') === 'cfce64e36c421100db147253f1087292a9478daf8e8c9b54faadb27f9f81fe3d'
  }

  /**
   * Return the deposit (if any) of an asset account.
   * 
   * The origin must be Signed.
   * 
   * - `id`: The identifier of the asset for the account to be created.
   * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
   * 
   * Emits `Refunded` event when successful.
   */
  get asV1401(): {id: bigint, allowBurn: boolean} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsSetMetadataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.set_metadata')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the metadata for an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * Funds of sender are reserved according to the formula:
   * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
   * account any already reserved funds.
   * 
   * - `id`: The identifier of the asset to update.
   * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
   * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
   * - `decimals`: The number of decimals this asset uses to represent one unit.
   * 
   * Emits `MetadataSet`.
   * 
   * Weight: `O(1)`
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.set_metadata') === 'b142260ca2687dcfda31b9abcd465d84b02d11acdebd9fefa543ea7ca86ac3ec'
  }

  /**
   * Set the metadata for an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * Funds of sender are reserved according to the formula:
   * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
   * account any already reserved funds.
   * 
   * - `id`: The identifier of the asset to update.
   * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
   * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
   * - `decimals`: The number of decimals this asset uses to represent one unit.
   * 
   * Emits `MetadataSet`.
   * 
   * Weight: `O(1)`
   */
  get asV1401(): {id: bigint, name: Uint8Array, symbol: Uint8Array, decimals: number} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsSetTeamCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.set_team')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Change the Issuer, Admin and Freezer of an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * - `issuer`: The new Issuer of this asset.
   * - `admin`: The new Admin of this asset.
   * - `freezer`: The new Freezer of this asset.
   * 
   * Emits `TeamChanged`.
   * 
   * Weight: `O(1)`
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.set_team') === '174368a9dc9d3476c39fb78c30a8689564369aa0ffce495f9c85284781d27f22'
  }

  /**
   * Change the Issuer, Admin and Freezer of an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * - `issuer`: The new Issuer of this asset.
   * - `admin`: The new Admin of this asset.
   * - `freezer`: The new Freezer of this asset.
   * 
   * Emits `TeamChanged`.
   * 
   * Weight: `O(1)`
   */
  get asV1401(): {id: bigint, issuer: v1401.AccountId20, admin: v1401.AccountId20, freezer: v1401.AccountId20} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsThawCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.thaw')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Allow unprivileged transfers from an account again.
   * 
   * Origin must be Signed and the sender should be the Admin of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * - `who`: The account to be unfrozen.
   * 
   * Emits `Thawed`.
   * 
   * Weight: `O(1)`
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.thaw') === 'e23174d6525e73918f65f8c3a09c76bd3023dc877957609c34e922c32c67b405'
  }

  /**
   * Allow unprivileged transfers from an account again.
   * 
   * Origin must be Signed and the sender should be the Admin of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be frozen.
   * - `who`: The account to be unfrozen.
   * 
   * Emits `Thawed`.
   * 
   * Weight: `O(1)`
   */
  get asV1401(): {id: bigint, who: v1401.AccountId20} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsThawAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.thaw_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Allow unprivileged transfers for the asset again.
   * 
   * Origin must be Signed and the sender should be the Admin of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be thawed.
   * 
   * Emits `Thawed`.
   * 
   * Weight: `O(1)`
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.thaw_asset') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
  }

  /**
   * Allow unprivileged transfers for the asset again.
   * 
   * Origin must be Signed and the sender should be the Admin of the asset `id`.
   * 
   * - `id`: The identifier of the asset to be thawed.
   * 
   * Emits `Thawed`.
   * 
   * Weight: `O(1)`
   */
  get asV1401(): {id: bigint} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsTouchCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.touch')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Create an asset account for non-provider assets.
   * 
   * A deposit will be taken from the signer account.
   * 
   * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
   *   to be taken.
   * - `id`: The identifier of the asset for the account to be created.
   * 
   * Emits `Touched` event when successful.
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.touch') === 'af839aed37c40068406cf360e78f8d27e97676290c49ab02329804a32b2876ab'
  }

  /**
   * Create an asset account for non-provider assets.
   * 
   * A deposit will be taken from the signer account.
   * 
   * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
   *   to be taken.
   * - `id`: The identifier of the asset for the account to be created.
   * 
   * Emits `Touched` event when successful.
   */
  get asV1401(): {id: bigint} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Move some assets from the sender account to another.
   * 
   * Origin must be Signed.
   * 
   * - `id`: The identifier of the asset to have some amount transferred.
   * - `target`: The account to be credited.
   * - `amount`: The amount by which the sender's balance of assets should be reduced and
   * `target`'s balance increased. The amount actually transferred may be slightly greater in
   * the case that the transfer would otherwise take the sender balance above zero but below
   * the minimum balance. Must be greater than zero.
   * 
   * Emits `Transferred` with the actual amount transferred. If this takes the source balance
   * to below the minimum for the asset, then the amount transferred is increased to take it
   * to zero.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
   * `target`.
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.transfer') === '90870be27fea4eefa5d1ec8ebec5b8a619184045d219810233b5996342c9f1a3'
  }

  /**
   * Move some assets from the sender account to another.
   * 
   * Origin must be Signed.
   * 
   * - `id`: The identifier of the asset to have some amount transferred.
   * - `target`: The account to be credited.
   * - `amount`: The amount by which the sender's balance of assets should be reduced and
   * `target`'s balance increased. The amount actually transferred may be slightly greater in
   * the case that the transfer would otherwise take the sender balance above zero but below
   * the minimum balance. Must be greater than zero.
   * 
   * Emits `Transferred` with the actual amount transferred. If this takes the source balance
   * to below the minimum for the asset, then the amount transferred is increased to take it
   * to zero.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
   * `target`.
   */
  get asV1401(): {id: bigint, target: v1401.AccountId20, amount: bigint} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsTransferApprovedCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.transfer_approved')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer some asset balance from a previously delegated account to some third-party
   * account.
   * 
   * Origin must be Signed and there must be an approval in place by the `owner` to the
   * signer.
   * 
   * If the entire amount approved for transfer is transferred, then any deposit previously
   * reserved by `approve_transfer` is unreserved.
   * 
   * - `id`: The identifier of the asset.
   * - `owner`: The account which previously approved for a transfer of at least `amount` and
   * from which the asset balance will be withdrawn.
   * - `destination`: The account to which the asset balance of `amount` will be transferred.
   * - `amount`: The amount of assets to transfer.
   * 
   * Emits `TransferredApproved` on success.
   * 
   * Weight: `O(1)`
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.transfer_approved') === 'bd03545098810ed5dbd253b46d36db96ee61230b8950dcb69f07baf49638308f'
  }

  /**
   * Transfer some asset balance from a previously delegated account to some third-party
   * account.
   * 
   * Origin must be Signed and there must be an approval in place by the `owner` to the
   * signer.
   * 
   * If the entire amount approved for transfer is transferred, then any deposit previously
   * reserved by `approve_transfer` is unreserved.
   * 
   * - `id`: The identifier of the asset.
   * - `owner`: The account which previously approved for a transfer of at least `amount` and
   * from which the asset balance will be withdrawn.
   * - `destination`: The account to which the asset balance of `amount` will be transferred.
   * - `amount`: The amount of assets to transfer.
   * 
   * Emits `TransferredApproved` on success.
   * 
   * Weight: `O(1)`
   */
  get asV1401(): {id: bigint, owner: v1401.AccountId20, destination: v1401.AccountId20, amount: bigint} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsTransferKeepAliveCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.transfer_keep_alive')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Move some assets from the sender account to another, keeping the sender account alive.
   * 
   * Origin must be Signed.
   * 
   * - `id`: The identifier of the asset to have some amount transferred.
   * - `target`: The account to be credited.
   * - `amount`: The amount by which the sender's balance of assets should be reduced and
   * `target`'s balance increased. The amount actually transferred may be slightly greater in
   * the case that the transfer would otherwise take the sender balance above zero but below
   * the minimum balance. Must be greater than zero.
   * 
   * Emits `Transferred` with the actual amount transferred. If this takes the source balance
   * to below the minimum for the asset, then the amount transferred is increased to take it
   * to zero.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
   * `target`.
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.transfer_keep_alive') === '90870be27fea4eefa5d1ec8ebec5b8a619184045d219810233b5996342c9f1a3'
  }

  /**
   * Move some assets from the sender account to another, keeping the sender account alive.
   * 
   * Origin must be Signed.
   * 
   * - `id`: The identifier of the asset to have some amount transferred.
   * - `target`: The account to be credited.
   * - `amount`: The amount by which the sender's balance of assets should be reduced and
   * `target`'s balance increased. The amount actually transferred may be slightly greater in
   * the case that the transfer would otherwise take the sender balance above zero but below
   * the minimum balance. Must be greater than zero.
   * 
   * Emits `Transferred` with the actual amount transferred. If this takes the source balance
   * to below the minimum for the asset, then the amount transferred is increased to take it
   * to zero.
   * 
   * Weight: `O(1)`
   * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
   * `target`.
   */
  get asV1401(): {id: bigint, target: v1401.AccountId20, amount: bigint} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class LocalAssetsTransferOwnershipCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LocalAssets.transfer_ownership')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Change the Owner of an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * - `id`: The identifier of the asset.
   * - `owner`: The new Owner of this asset.
   * 
   * Emits `OwnerChanged`.
   * 
   * Weight: `O(1)`
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('LocalAssets.transfer_ownership') === '19bba4b3716123a7f3da481737ff52ada19bd9bdfa37bdf5a9916d0a2d383793'
  }

  /**
   * Change the Owner of an asset.
   * 
   * Origin must be Signed and the sender should be the Owner of the asset `id`.
   * 
   * - `id`: The identifier of the asset.
   * - `owner`: The new Owner of this asset.
   * 
   * Emits `OwnerChanged`.
   * 
   * Weight: `O(1)`
   */
  get asV1401(): {id: bigint, owner: v1401.AccountId20} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class MaintenanceModeEnterMaintenanceModeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MaintenanceMode.enter_maintenance_mode')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Place the chain in maintenance mode
   * 
   * Weight cost is:
   * * One DB read to ensure we're not already in maintenance mode
   * * Two DB writes - 1 for the mode and 1 for the event
   */
  get isV900(): boolean {
    return this._chain.getCallHash('MaintenanceMode.enter_maintenance_mode') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Place the chain in maintenance mode
   * 
   * Weight cost is:
   * * One DB read to ensure we're not already in maintenance mode
   * * Two DB writes - 1 for the mode and 1 for the event
   */
  get asV900(): null {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class MaintenanceModeResumeNormalOperationCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MaintenanceMode.resume_normal_operation')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Return the chain to normal operating mode
   * 
   * Weight cost is:
   * * One DB read to ensure we're in maintenance mode
   * * Two DB writes - 1 for the mode and 1 for the event
   */
  get isV900(): boolean {
    return this._chain.getCallHash('MaintenanceMode.resume_normal_operation') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Return the chain to normal operating mode
   * 
   * Weight cost is:
   * * One DB read to ensure we're in maintenance mode
   * * Two DB writes - 1 for the mode and 1 for the event
   */
  get asV900(): null {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class MoonbeamOrbitersAddCollatorCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MoonbeamOrbiters.add_collator')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Add a collator to orbiters program.
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('MoonbeamOrbiters.add_collator') === '00632279f32edc0169a835c9730e221051e336355476aa8c7fba026d19f1fbd9'
  }

  /**
   * Add a collator to orbiters program.
   */
  get asV1502(): {collator: v1502.AccountId20} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }
}

export class MoonbeamOrbitersCollatorAddOrbiterCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MoonbeamOrbiters.collator_add_orbiter')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Add an orbiter in a collator pool
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('MoonbeamOrbiters.collator_add_orbiter') === '130583ad9c305b032bae95426a6446b9060f1cde717adbc427ae0f9365abae1b'
  }

  /**
   * Add an orbiter in a collator pool
   */
  get asV1502(): {orbiter: v1502.AccountId20} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }
}

export class MoonbeamOrbitersCollatorRemoveOrbiterCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MoonbeamOrbiters.collator_remove_orbiter')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove an orbiter from the caller collator pool
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('MoonbeamOrbiters.collator_remove_orbiter') === '130583ad9c305b032bae95426a6446b9060f1cde717adbc427ae0f9365abae1b'
  }

  /**
   * Remove an orbiter from the caller collator pool
   */
  get asV1502(): {orbiter: v1502.AccountId20} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }
}

export class MoonbeamOrbitersOrbiterLeaveCollatorPoolCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MoonbeamOrbiters.orbiter_leave_collator_pool')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove the caller from the specified collator pool
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('MoonbeamOrbiters.orbiter_leave_collator_pool') === '00632279f32edc0169a835c9730e221051e336355476aa8c7fba026d19f1fbd9'
  }

  /**
   * Remove the caller from the specified collator pool
   */
  get asV1502(): {collator: v1502.AccountId20} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }
}

export class MoonbeamOrbitersOrbiterRegisterCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MoonbeamOrbiters.orbiter_register')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Registering as an orbiter
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('MoonbeamOrbiters.orbiter_register') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Registering as an orbiter
   */
  get asV1502(): null {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }
}

export class MoonbeamOrbitersOrbiterUnregisterCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MoonbeamOrbiters.orbiter_unregister')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Deregistering from orbiters
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('MoonbeamOrbiters.orbiter_unregister') === 'a4c2cec44ebd5983e77637a1df60f12d6ed59ea9934b8cf841310b51423dc736'
  }

  /**
   * Deregistering from orbiters
   */
  get asV1502(): {collatorsPoolCount: number} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }
}

export class MoonbeamOrbitersRemoveCollatorCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MoonbeamOrbiters.remove_collator')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove a collator from orbiters program.
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('MoonbeamOrbiters.remove_collator') === '00632279f32edc0169a835c9730e221051e336355476aa8c7fba026d19f1fbd9'
  }

  /**
   * Remove a collator from orbiters program.
   */
  get asV1502(): {collator: v1502.AccountId20} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingCancelCandidateBondLessCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.cancel_candidate_bond_less')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel pending request to adjust the collator candidate self bond
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('ParachainStaking.cancel_candidate_bond_less') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Cancel pending request to adjust the collator candidate self bond
   */
  get asV1001(): null {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingCancelDelegationRequestCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.cancel_delegation_request')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel request to change an existing delegation.
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('ParachainStaking.cancel_delegation_request') === '961106341022f16157715692b34ae57a6aa577d1f0cd80aa5e255bb45911c3ab'
  }

  /**
   * Cancel request to change an existing delegation.
   */
  get asV1001(): {candidate: v1001.AccountId20} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingCancelLeaveCandidatesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.cancel_leave_candidates')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel open request to leave candidates
   * - only callable by collator account
   * - result upon successful call is the candidate is active in the candidate pool
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('ParachainStaking.cancel_leave_candidates') === '686eeafa55cefbea4fd57209c34b1a2e10fd7c57584a53285401aa0463a9bbf2'
  }

  /**
   * Cancel open request to leave candidates
   * - only callable by collator account
   * - result upon successful call is the candidate is active in the candidate pool
   */
  get asV1001(): {candidateCount: number} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingCancelLeaveDelegatorsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.cancel_leave_delegators')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel a pending request to exit the set of delegators. Success clears the pending exit
   * request (thereby resetting the delay upon another `leave_delegators` call).
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('ParachainStaking.cancel_leave_delegators') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Cancel a pending request to exit the set of delegators. Success clears the pending exit
   * request (thereby resetting the delay upon another `leave_delegators` call).
   */
  get asV1001(): null {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingCandidateBondLessCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.candidate_bond_less')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Bond less for collator candidates
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainStaking.candidate_bond_less') === 'cd01c75bba8be1109a7311fe5e14ce439715dc5bae824e0d2efba8754cecb877'
  }

  /**
   * Bond less for collator candidates
   */
  get asV900(): {less: bigint} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingCandidateBondMoreCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.candidate_bond_more')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Bond more for collator candidates
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainStaking.candidate_bond_more') === '510e5796be2276dabdf492d2ba358a0c7af13907fdbdd359f76149808ca0700c'
  }

  /**
   * Bond more for collator candidates
   */
  get asV900(): {more: bigint} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingDelegateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.delegate')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * If caller is not a delegator and not a collator, then join the set of delegators
   * If caller is a delegator, then makes delegation to change their delegation state
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('ParachainStaking.delegate') === 'ee319d872d5d5c39b451dd71da1d223feea2764eaf5df0307074e434fea80d5d'
  }

  /**
   * If caller is not a delegator and not a collator, then join the set of delegators
   * If caller is a delegator, then makes delegation to change their delegation state
   */
  get asV1001(): {collator: v1001.AccountId20, amount: bigint, candidateDelegationCount: number, delegationCount: number} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }

  /**
   * If caller is not a delegator and not a collator, then join the set of delegators
   * If caller is a delegator, then makes delegation to change their delegation state
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('ParachainStaking.delegate') === '31cad6bbf9e597ccea3b531b2c6ad587f7563c92d4ce960933ca16c4a1cd30ae'
  }

  /**
   * If caller is not a delegator and not a collator, then join the set of delegators
   * If caller is a delegator, then makes delegation to change their delegation state
   */
  get asV1201(): {candidate: v1201.AccountId20, amount: bigint, candidateDelegationCount: number, delegationCount: number} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingDelegatorBondMoreCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.delegator_bond_more')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Bond more for delegators wrt a specific collator candidate.
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('ParachainStaking.delegator_bond_more') === '0078e21554abf426ecbc4dad8c0bb82cd4313b047e7b778695fdbb0eea81aa83'
  }

  /**
   * Bond more for delegators wrt a specific collator candidate.
   */
  get asV1001(): {candidate: v1001.AccountId20, more: bigint} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingExecuteCandidateBondLessCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.execute_candidate_bond_less')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Execute pending request to adjust the collator candidate self bond
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('ParachainStaking.execute_candidate_bond_less') === '961106341022f16157715692b34ae57a6aa577d1f0cd80aa5e255bb45911c3ab'
  }

  /**
   * Execute pending request to adjust the collator candidate self bond
   */
  get asV1001(): {candidate: v1001.AccountId20} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingExecuteDelegationRequestCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.execute_delegation_request')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Execute pending request to change an existing delegation
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('ParachainStaking.execute_delegation_request') === 'a71ac0bc634f01e4a3c1e8307631df9ecf17a794e03bacc2da4d28697d0a0b11'
  }

  /**
   * Execute pending request to change an existing delegation
   */
  get asV1001(): {delegator: v1001.AccountId20, candidate: v1001.AccountId20} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingExecuteLeaveCandidatesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.execute_leave_candidates')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Execute leave candidates request
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('ParachainStaking.execute_leave_candidates') === '961106341022f16157715692b34ae57a6aa577d1f0cd80aa5e255bb45911c3ab'
  }

  /**
   * Execute leave candidates request
   */
  get asV1001(): {candidate: v1001.AccountId20} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Execute leave candidates request
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('ParachainStaking.execute_leave_candidates') === '200225eca4ed8ad3a86239d7abe51d8f096efc8469a3661ca07aea163760c9b4'
  }

  /**
   * Execute leave candidates request
   */
  get asV1201(): {candidate: v1201.AccountId20, candidateDelegationCount: number} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingExecuteLeaveDelegatorsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.execute_leave_delegators')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Execute the right to exit the set of delegators and revoke all ongoing delegations.
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('ParachainStaking.execute_leave_delegators') === '9e5d094172b77a20ca23b312880583d4984627bdcd5fe2475c0ea74b34d6f83b'
  }

  /**
   * Execute the right to exit the set of delegators and revoke all ongoing delegations.
   */
  get asV1001(): {delegator: v1001.AccountId20, delegationCount: number} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingGoOfflineCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.go_offline')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Temporarily leave the set of collator candidates without unbonding
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainStaking.go_offline') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Temporarily leave the set of collator candidates without unbonding
   */
  get asV900(): null {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingGoOnlineCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.go_online')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Rejoin the set of collator candidates if previously had called `go_offline`
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainStaking.go_online') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Rejoin the set of collator candidates if previously had called `go_offline`
   */
  get asV900(): null {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingHotfixRemoveDelegationRequestsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.hotfix_remove_delegation_requests')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Hotfix patch to remove all delegation requests not removed during a candidate exit
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('ParachainStaking.hotfix_remove_delegation_requests') === '87707687198aa58f4ff02f9abdca704b2de292b801302ed171770e914d607758'
  }

  /**
   * Hotfix patch to remove all delegation requests not removed during a candidate exit
   */
  get asV1201(): {delegators: v1201.AccountId20[]} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingHotfixUpdateCandidatePoolValueCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.hotfix_update_candidate_pool_value')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Hotfix patch to correct and update CandidatePool value for candidates that have
   * called candidate_bond_more when it did not update the CandidatePool value
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('ParachainStaking.hotfix_update_candidate_pool_value') === '0b4e7f50efc45b451aabded6e9536ff6ebfc313152c32ab631520b5b0cf03884'
  }

  /**
   * Hotfix patch to correct and update CandidatePool value for candidates that have
   * called candidate_bond_more when it did not update the CandidatePool value
   */
  get asV1201(): {candidates: v1201.AccountId20[]} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingJoinCandidatesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.join_candidates')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Join the set of collator candidates
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainStaking.join_candidates') === '6832aa96f7b5bf6addd0c8cc4f9ae51f63c4c8a705cc5cc698fa8a24c1fc4476'
  }

  /**
   * Join the set of collator candidates
   */
  get asV900(): {bond: bigint, candidateCount: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingLeaveCandidatesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.leave_candidates')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Request to leave the set of candidates. If successful, the account is immediately
   * removed from the candidate pool to prevent selection as a collator, but unbonding is
   * executed with a delay of `T::LeaveCandidates` rounds.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainStaking.leave_candidates') === '686eeafa55cefbea4fd57209c34b1a2e10fd7c57584a53285401aa0463a9bbf2'
  }

  /**
   * Request to leave the set of candidates. If successful, the account is immediately
   * removed from the candidate pool to prevent selection as a collator, but unbonding is
   * executed with a delay of `T::LeaveCandidates` rounds.
   */
  get asV900(): {candidateCount: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingLeaveNominatorsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.leave_nominators')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Request to leave the set of nominators. If successful, the nominator is scheduled
   * to exit
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainStaking.leave_nominators') === '1c19765f5ee05401b33e7e6623eea13d66150b5cd83894fbbc9bc048c67e256f'
  }

  /**
   * Request to leave the set of nominators. If successful, the nominator is scheduled
   * to exit
   */
  get asV900(): {nominationCount: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingNominateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.nominate')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * If caller is not a nominator, then join the set of nominators
   * If caller is a nominator, then makes nomination to change their nomination state
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainStaking.nominate') === 'ac3024b660d0287106aae85c3308192d75da2ce9692d20e46b0639bf3cd65894'
  }

  /**
   * If caller is not a nominator, then join the set of nominators
   * If caller is a nominator, then makes nomination to change their nomination state
   */
  get asV900(): {collator: v900.H160, amount: bigint, collatorNominatorCount: number, nominationCount: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingNominatorBondLessCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.nominator_bond_less')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Bond less for nominators with respect to a specific nominator candidate
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainStaking.nominator_bond_less') === '176e28968c3114ff23fe3cc7c28d1d9b01aafe25b39bf8fef8d3c58220f069a2'
  }

  /**
   * Bond less for nominators with respect to a specific nominator candidate
   */
  get asV900(): {candidate: v900.H160, less: bigint} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingNominatorBondMoreCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.nominator_bond_more')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Bond more for nominators with respect to a specific collator candidate
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainStaking.nominator_bond_more') === '0078e21554abf426ecbc4dad8c0bb82cd4313b047e7b778695fdbb0eea81aa83'
  }

  /**
   * Bond more for nominators with respect to a specific collator candidate
   */
  get asV900(): {candidate: v900.H160, more: bigint} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingRevokeNominationCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.revoke_nomination')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Request to revoke an existing nomination. If successful, the nomination is scheduled
   * to exit
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainStaking.revoke_nomination') === '00632279f32edc0169a835c9730e221051e336355476aa8c7fba026d19f1fbd9'
  }

  /**
   * Request to revoke an existing nomination. If successful, the nomination is scheduled
   * to exit
   */
  get asV900(): {collator: v900.H160} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingScheduleCandidateBondLessCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.schedule_candidate_bond_less')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Request by collator candidate to decrease self bond by `less`
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('ParachainStaking.schedule_candidate_bond_less') === 'cd01c75bba8be1109a7311fe5e14ce439715dc5bae824e0d2efba8754cecb877'
  }

  /**
   * Request by collator candidate to decrease self bond by `less`
   */
  get asV1001(): {less: bigint} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingScheduleDelegatorBondLessCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.schedule_delegator_bond_less')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Request bond less for delegators wrt a specific collator candidate.
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('ParachainStaking.schedule_delegator_bond_less') === '176e28968c3114ff23fe3cc7c28d1d9b01aafe25b39bf8fef8d3c58220f069a2'
  }

  /**
   * Request bond less for delegators wrt a specific collator candidate.
   */
  get asV1001(): {candidate: v1001.AccountId20, less: bigint} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingScheduleLeaveCandidatesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.schedule_leave_candidates')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Request to leave the set of candidates. If successful, the account is immediately
   * removed from the candidate pool to prevent selection as a collator.
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('ParachainStaking.schedule_leave_candidates') === '686eeafa55cefbea4fd57209c34b1a2e10fd7c57584a53285401aa0463a9bbf2'
  }

  /**
   * Request to leave the set of candidates. If successful, the account is immediately
   * removed from the candidate pool to prevent selection as a collator.
   */
  get asV1001(): {candidateCount: number} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingScheduleLeaveDelegatorsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.schedule_leave_delegators')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Request to leave the set of delegators. If successful, the caller is scheduled
   * to be allowed to exit. Success forbids future delegator actions until the request is
   * invoked or cancelled.
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('ParachainStaking.schedule_leave_delegators') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Request to leave the set of delegators. If successful, the caller is scheduled
   * to be allowed to exit. Success forbids future delegator actions until the request is
   * invoked or cancelled.
   */
  get asV1001(): null {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingScheduleRevokeDelegationCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.schedule_revoke_delegation')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Request to revoke an existing delegation. If successful, the delegation is scheduled
   * to be allowed to be revoked via the `execute_delegation_request` extrinsic.
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('ParachainStaking.schedule_revoke_delegation') === '00632279f32edc0169a835c9730e221051e336355476aa8c7fba026d19f1fbd9'
  }

  /**
   * Request to revoke an existing delegation. If successful, the delegation is scheduled
   * to be allowed to be revoked via the `execute_delegation_request` extrinsic.
   */
  get asV1001(): {collator: v1001.AccountId20} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingSetBlocksPerRoundCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.set_blocks_per_round')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set blocks per round
   * - if called with `new` less than length of current round, will transition immediately
   * in the next block
   * - also updates per-round inflation config
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainStaking.set_blocks_per_round') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
  }

  /**
   * Set blocks per round
   * - if called with `new` less than length of current round, will transition immediately
   * in the next block
   * - also updates per-round inflation config
   */
  get asV900(): {new: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingSetCollatorCommissionCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.set_collator_commission')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the commission for all collators
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainStaking.set_collator_commission') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
  }

  /**
   * Set the commission for all collators
   */
  get asV900(): {new: v900.Perbill} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingSetInflationCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.set_inflation')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the annual inflation rate to derive per-round inflation
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainStaking.set_inflation') === 'fafdf61154c0388cdff2eb8d210526e9ba2d925398effdbea9ed8f4cf289a16c'
  }

  /**
   * Set the annual inflation rate to derive per-round inflation
   */
  get asV900(): {schedule: v900.Range_159} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingSetParachainBondAccountCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.set_parachain_bond_account')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the account that will hold funds set aside for parachain bond
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainStaking.set_parachain_bond_account') === '3c6afa5041fd40be6f0bd612338d44e54b2fc8aedc3ca3dbd6797775549297ba'
  }

  /**
   * Set the account that will hold funds set aside for parachain bond
   */
  get asV900(): {new: v900.H160} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingSetParachainBondReservePercentCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.set_parachain_bond_reserve_percent')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the percent of inflation set aside for parachain bond
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainStaking.set_parachain_bond_reserve_percent') === '09500100ee0ef7de7a517c77b545786d373383efeb1a42ac3f0ddaccc0f7486a'
  }

  /**
   * Set the percent of inflation set aside for parachain bond
   */
  get asV900(): {new: v900.Percent} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingSetStakingExpectationsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.set_staking_expectations')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the expectations for total staked. These expectations determine the issuance for
   * the round according to logic in `fn compute_issuance`
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainStaking.set_staking_expectations') === 'd129d2f224f991bf699793fc7629e2ba1f9f2b4e2993d7dd7b3b4f6aee0d9c3a'
  }

  /**
   * Set the expectations for total staked. These expectations determine the issuance for
   * the round according to logic in `fn compute_issuance`
   */
  get asV900(): {expectations: v900.Range_158} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainStakingSetTotalSelectedCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainStaking.set_total_selected')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the total number of collator candidates selected per round
   * - changes are not applied until the start of the next round
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainStaking.set_total_selected') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
  }

  /**
   * Set the total number of collator candidates selected per round
   * - changes are not applied until the start of the next round
   */
  get asV900(): {new: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainSystemAuthorizeUpgradeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainSystem.authorize_upgrade')
    this._chain = ctx._chain
    this.call = call
  }

  get isV900(): boolean {
    return this._chain.getCallHash('ParachainSystem.authorize_upgrade') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
  }

  get asV900(): {codeHash: v900.H256} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainSystemEnactAuthorizedUpgradeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainSystem.enact_authorized_upgrade')
    this._chain = ctx._chain
    this.call = call
  }

  get isV900(): boolean {
    return this._chain.getCallHash('ParachainSystem.enact_authorized_upgrade') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
  }

  get asV900(): {code: Uint8Array} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainSystemSetUpgradeBlockCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainSystem.set_upgrade_block')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Force an already scheduled validation function upgrade to happen on a particular block.
   * 
   * Note that coordinating this block for the upgrade has to happen independently on the
   * relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
   * and this bypasses all checks and and normal protocols. Very easy to brick your chain
   * if done wrong.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainSystem.set_upgrade_block') === '4552b4c9a331e27653dd826226a620c7ef63c4af553ba86f11cdfd63fb1b1028'
  }

  /**
   * Force an already scheduled validation function upgrade to happen on a particular block.
   * 
   * Note that coordinating this block for the upgrade has to happen independently on the
   * relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
   * and this bypasses all checks and and normal protocols. Very easy to brick your chain
   * if done wrong.
   */
  get asV900(): {relayChainBlock: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainSystemSetValidationDataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainSystem.set_validation_data')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the current validation data.
   * 
   * This should be invoked exactly once per block. It will panic at the finalization
   * phase if the call was not invoked.
   * 
   * The dispatch origin for this call must be `Inherent`
   * 
   * As a side effect, this function upgrades the current validation function
   * if the appropriate time has come.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('ParachainSystem.set_validation_data') === 'df843f97e4c625e033541d5f205c5889f3131bdb4549570310e924d96769c1cd'
  }

  /**
   * Set the current validation data.
   * 
   * This should be invoked exactly once per block. It will panic at the finalization
   * phase if the call was not invoked.
   * 
   * The dispatch origin for this call must be `Inherent`
   * 
   * As a side effect, this function upgrades the current validation function
   * if the appropriate time has come.
   */
  get asV900(): {data: v900.ParachainInherentData} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainSystemSudoSendUpwardMessageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainSystem.sudo_send_upward_message')
    this._chain = ctx._chain
    this.call = call
  }

  get isV900(): boolean {
    return this._chain.getCallHash('ParachainSystem.sudo_send_upward_message') === '34457b6daded32ddc4ec3a5a21e34b9af8dcd7d190a5a7833fa8a7ed53b31206'
  }

  get asV900(): {message: Uint8Array} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmExecuteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.execute')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Execute an XCM message from a local, signed, origin.
   * 
   * An event is deposited indicating whether `msg` could be executed completely or only
   * partially.
   * 
   * No more than `max_weight` will be used in its attempted execution. If this is less than the
   * maximum amount of weight that the message could take to be executed, then no execution
   * attempt will be made.
   * 
   * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
   * to completion; only that *some* of it was executed.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('PolkadotXcm.execute') === '41f7d0295efed5db73229cbd1e9f1fdc0e7f9e159af3b17a10880e74bcdb3ad4'
  }

  /**
   * Execute an XCM message from a local, signed, origin.
   * 
   * An event is deposited indicating whether `msg` could be executed completely or only
   * partially.
   * 
   * No more than `max_weight` will be used in its attempted execution. If this is less than the
   * maximum amount of weight that the message could take to be executed, then no execution
   * attempt will be made.
   * 
   * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
   * to completion; only that *some* of it was executed.
   */
  get asV1201(): {message: v1201.VersionedXcm_323, maxWeight: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Execute an XCM message from a local, signed, origin.
   * 
   * An event is deposited indicating whether `msg` could be executed completely or only
   * partially.
   * 
   * No more than `max_weight` will be used in its attempted execution. If this is less than the
   * maximum amount of weight that the message could take to be executed, then no execution
   * attempt will be made.
   * 
   * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
   * to completion; only that *some* of it was executed.
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('PolkadotXcm.execute') === 'c6251691ab3319ecee95442d381c308f9ada155e423798c908cbd6b063aa26b4'
  }

  /**
   * Execute an XCM message from a local, signed, origin.
   * 
   * An event is deposited indicating whether `msg` could be executed completely or only
   * partially.
   * 
   * No more than `max_weight` will be used in its attempted execution. If this is less than the
   * maximum amount of weight that the message could take to be executed, then no execution
   * attempt will be made.
   * 
   * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
   * to completion; only that *some* of it was executed.
   */
  get asV1300(): {message: v1300.VersionedXcm_322, maxWeight: bigint} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmForceDefaultXcmVersionCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.force_default_xcm_version')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set a safe XCM version (the version that XCM should be encoded with if the most recent
   * version a destination can accept is unknown).
   * 
   * - `origin`: Must be Root.
   * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('PolkadotXcm.force_default_xcm_version') === 'd4bcd64cc4c940eafd14296ec6cbfb7d27e4ca42a4c7dab4c0b89f6c8102257e'
  }

  /**
   * Set a safe XCM version (the version that XCM should be encoded with if the most recent
   * version a destination can accept is unknown).
   * 
   * - `origin`: Must be Root.
   * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
   */
  get asV1201(): {maybeXcmVersion: (number | undefined)} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmForceSubscribeVersionNotifyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.force_subscribe_version_notify')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Ask a location to notify us regarding their XCM version and any changes to it.
   * 
   * - `origin`: Must be Root.
   * - `location`: The location to which we should subscribe for XCM version notifications.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('PolkadotXcm.force_subscribe_version_notify') === 'f3f38b2278743e50bfd76c0f778560fb38a60c931275e9df42f2b9ce08c1d6fc'
  }

  /**
   * Ask a location to notify us regarding their XCM version and any changes to it.
   * 
   * - `origin`: Must be Root.
   * - `location`: The location to which we should subscribe for XCM version notifications.
   */
  get asV1201(): {location: v1201.VersionedMultiLocation} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmForceUnsubscribeVersionNotifyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.force_unsubscribe_version_notify')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Require that a particular destination should no longer notify us regarding any XCM
   * version changes.
   * 
   * - `origin`: Must be Root.
   * - `location`: The location to which we are currently subscribed for XCM version
   *   notifications which we no longer desire.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('PolkadotXcm.force_unsubscribe_version_notify') === 'f3f38b2278743e50bfd76c0f778560fb38a60c931275e9df42f2b9ce08c1d6fc'
  }

  /**
   * Require that a particular destination should no longer notify us regarding any XCM
   * version changes.
   * 
   * - `origin`: Must be Root.
   * - `location`: The location to which we are currently subscribed for XCM version
   *   notifications which we no longer desire.
   */
  get asV1201(): {location: v1201.VersionedMultiLocation} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmForceXcmVersionCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.force_xcm_version')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Extoll that a particular destination can be communicated with through a particular
   * version of XCM.
   * 
   * - `origin`: Must be Root.
   * - `location`: The destination that is being described.
   * - `xcm_version`: The latest version of XCM that `location` supports.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('PolkadotXcm.force_xcm_version') === '3bdd3ba3db54facd962462ff1c2c0ede1b428cf9119b36a4e96fa86916145f75'
  }

  /**
   * Extoll that a particular destination can be communicated with through a particular
   * version of XCM.
   * 
   * - `origin`: Must be Root.
   * - `location`: The destination that is being described.
   * - `xcm_version`: The latest version of XCM that `location` supports.
   */
  get asV1201(): {location: v1201.V1MultiLocation, xcmVersion: number} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmLimitedReserveTransferAssetsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.limited_reserve_transfer_assets')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
   * a notification XCM.
   * 
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *   `dest` side.
   * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
   *   fees.
   * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('PolkadotXcm.limited_reserve_transfer_assets') === '3c203a3f95b9fe53b8c376802c4fe60fa6077815af7432dcd2a3e458169a5d2a'
  }

  /**
   * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
   * a notification XCM.
   * 
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *   `dest` side.
   * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
   *   fees.
   * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
   */
  get asV1201(): {dest: v1201.VersionedMultiLocation, beneficiary: v1201.VersionedMultiLocation, assets: v1201.VersionedMultiAssets, feeAssetItem: number, weightLimit: v1201.V2WeightLimit} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmLimitedTeleportAssetsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.limited_teleport_assets')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Teleport some assets from the local chain to some destination chain.
   * 
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
   *   `dest` side. May not be empty.
   * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('PolkadotXcm.limited_teleport_assets') === '3c203a3f95b9fe53b8c376802c4fe60fa6077815af7432dcd2a3e458169a5d2a'
  }

  /**
   * Teleport some assets from the local chain to some destination chain.
   * 
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
   *   `dest` side. May not be empty.
   * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
   */
  get asV1201(): {dest: v1201.VersionedMultiLocation, beneficiary: v1201.VersionedMultiLocation, assets: v1201.VersionedMultiAssets, feeAssetItem: number, weightLimit: v1201.V2WeightLimit} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmReserveTransferAssetsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.reserve_transfer_assets')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
   * a notification XCM.
   * 
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
   * fee-weight is calculated locally and thus remote weights are assumed to be equal to
   * local weights.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *   `dest` side.
   * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
   *   fees.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('PolkadotXcm.reserve_transfer_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
  }

  /**
   * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
   * a notification XCM.
   * 
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
   * fee-weight is calculated locally and thus remote weights are assumed to be equal to
   * local weights.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
   *   `dest` side.
   * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
   *   fees.
   */
  get asV1201(): {dest: v1201.VersionedMultiLocation, beneficiary: v1201.VersionedMultiLocation, assets: v1201.VersionedMultiAssets, feeAssetItem: number} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmSendCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.send')
    this._chain = ctx._chain
    this.call = call
  }

  get isV1201(): boolean {
    return this._chain.getCallHash('PolkadotXcm.send') === '9ec4149ae6cee6240a6e2aa06a8ef90285e68be29dd0de109b35af7922311609'
  }

  get asV1201(): {dest: v1201.VersionedMultiLocation, message: v1201.VersionedXcm_312} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  get isV1300(): boolean {
    return this._chain.getCallHash('PolkadotXcm.send') === '3ca4beb317aeed3e0a00ae870ffd3bef841bb6f4e766db0b286c7fc5d8eef886'
  }

  get asV1300(): {dest: v1300.VersionedMultiLocation, message: v1300.VersionedXcm_311} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmTeleportAssetsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.teleport_assets')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Teleport some assets from the local chain to some destination chain.
   * 
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
   * fee-weight is calculated locally and thus remote weights are assumed to be equal to
   * local weights.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
   *   `dest` side. May not be empty.
   * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('PolkadotXcm.teleport_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
  }

  /**
   * Teleport some assets from the local chain to some destination chain.
   * 
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
   * fee-weight is calculated locally and thus remote weights are assumed to be equal to
   * local weights.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
   *   `dest` side. May not be empty.
   * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get asV1201(): {dest: v1201.VersionedMultiLocation, beneficiary: v1201.VersionedMultiLocation, assets: v1201.VersionedMultiAssets, feeAssetItem: number} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyAddProxyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.add_proxy')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Register a proxy account for the sender that is able to make calls on its behalf.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `proxy`: The account that the `caller` would like to make a proxy.
   * - `proxy_type`: The permissions allowed for this proxy account.
   * - `delay`: The announcement period required of the initial proxy. Will generally be
   * zero.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Proxy.add_proxy') === '42ed786b62d8effa8454803f1bc18368a3887ecc20b519a0de210a1672f17ec0'
  }

  /**
   * Register a proxy account for the sender that is able to make calls on its behalf.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `proxy`: The account that the `caller` would like to make a proxy.
   * - `proxy_type`: The permissions allowed for this proxy account.
   * - `delay`: The announcement period required of the initial proxy. Will generally be
   * zero.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get asV900(): {delegate: v900.H160, proxyType: v900.ProxyType, delay: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyAnnounceCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.announce')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Publish the hash of a proxy-call that will be made in the future.
   * 
   * This must be called some number of blocks before the corresponding `proxy` is attempted
   * if the delay associated with the proxy relationship is greater than zero.
   * 
   * No more than `MaxPending` announcements may be made at any one time.
   * 
   * This will take a deposit of `AnnouncementDepositFactor` as well as
   * `AnnouncementDepositBase` if there are no other pending announcements.
   * 
   * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `call_hash`: The hash of the call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Proxy.announce') === '3ca49cb5a26ad6c122398f7fe8a5a9632ecec61e2fd72dd0add1de10582c9c81'
  }

  /**
   * Publish the hash of a proxy-call that will be made in the future.
   * 
   * This must be called some number of blocks before the corresponding `proxy` is attempted
   * if the delay associated with the proxy relationship is greater than zero.
   * 
   * No more than `MaxPending` announcements may be made at any one time.
   * 
   * This will take a deposit of `AnnouncementDepositFactor` as well as
   * `AnnouncementDepositBase` if there are no other pending announcements.
   * 
   * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `call_hash`: The hash of the call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get asV900(): {real: v900.H160, callHash: v900.H256} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyAnonymousCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.anonymous')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
   * initialize it with a proxy of `proxy_type` for `origin` sender.
   * 
   * Requires a `Signed` origin.
   * 
   * - `proxy_type`: The type of the proxy that the sender will be registered as over the
   * new account. This will almost always be the most permissive `ProxyType` possible to
   * allow for maximum flexibility.
   * - `index`: A disambiguation index, in case this is called multiple times in the same
   * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
   * want to use `0`.
   * - `delay`: The announcement period required of the initial proxy. Will generally be
   * zero.
   * 
   * Fails with `Duplicate` if this has already been called in this transaction, from the
   * same sender, with the same parameters.
   * 
   * Fails if there are insufficient funds to pay for deposit.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   * TODO: Might be over counting 1 read
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Proxy.anonymous') === 'e2b409508e2ce392375c83bc78352e622d5d16299cb7b1372da2f365820b4f85'
  }

  /**
   * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
   * initialize it with a proxy of `proxy_type` for `origin` sender.
   * 
   * Requires a `Signed` origin.
   * 
   * - `proxy_type`: The type of the proxy that the sender will be registered as over the
   * new account. This will almost always be the most permissive `ProxyType` possible to
   * allow for maximum flexibility.
   * - `index`: A disambiguation index, in case this is called multiple times in the same
   * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
   * want to use `0`.
   * - `delay`: The announcement period required of the initial proxy. Will generally be
   * zero.
   * 
   * Fails with `Duplicate` if this has already been called in this transaction, from the
   * same sender, with the same parameters.
   * 
   * Fails if there are insufficient funds to pay for deposit.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   * TODO: Might be over counting 1 read
   */
  get asV900(): {proxyType: v900.ProxyType, delay: number, index: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyKillAnonymousCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.kill_anonymous')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Removes a previously spawned anonymous proxy.
   * 
   * WARNING: **All access to this account will be lost.** Any funds held in it will be
   * inaccessible.
   * 
   * Requires a `Signed` origin, and the sender account must have been created by a call to
   * `anonymous` with corresponding parameters.
   * 
   * - `spawner`: The account that originally called `anonymous` to create this account.
   * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
   * - `proxy_type`: The proxy type originally passed to `anonymous`.
   * - `height`: The height of the chain when the call to `anonymous` was processed.
   * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
   * 
   * Fails with `NoPermission` in case the caller is not a previously created anonymous
   * account whose `anonymous` call has corresponding parameters.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Proxy.kill_anonymous') === '95f82308d1ffe5b46fb51f98eab77b62655ee97752132b0c3fcaa6a77d09b3b5'
  }

  /**
   * Removes a previously spawned anonymous proxy.
   * 
   * WARNING: **All access to this account will be lost.** Any funds held in it will be
   * inaccessible.
   * 
   * Requires a `Signed` origin, and the sender account must have been created by a call to
   * `anonymous` with corresponding parameters.
   * 
   * - `spawner`: The account that originally called `anonymous` to create this account.
   * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
   * - `proxy_type`: The proxy type originally passed to `anonymous`.
   * - `height`: The height of the chain when the call to `anonymous` was processed.
   * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
   * 
   * Fails with `NoPermission` in case the caller is not a previously created anonymous
   * account whose `anonymous` call has corresponding parameters.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get asV900(): {spawner: v900.H160, proxyType: v900.ProxyType, index: number, height: number, extIndex: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyProxyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.proxy')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Proxy.proxy') === '7a71c51835cc1e90efc658e20e24b084b31f28de56beda0a2d4ca8c6a296fd38'
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get asV900(): {real: v900.H160, forceProxyType: (v900.ProxyType | undefined), call: v900.Call} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('Proxy.proxy') === '554859d027d08ec8fabf1d446096b02f98d461832982681e23670269079f6f4f'
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get asV1001(): {real: v1001.AccountId20, forceProxyType: (v1001.ProxyType | undefined), call: v1001.Call} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get isV1101(): boolean {
    return this._chain.getCallHash('Proxy.proxy') === '1e4ef47a13c619888f40f18dfc752e3bc98f4384631fcf0013eefe0cc0936e45'
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get asV1101(): {real: v1101.AccountId20, forceProxyType: (v1101.ProxyType | undefined), call: v1101.Call} {
    assert(this.isV1101)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Proxy.proxy') === '64ce71cba0bd56f5f1879d427db85566fc111cbbc214e3cc785baa8fc290158f'
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get asV1201(): {real: v1201.AccountId20, forceProxyType: (v1201.ProxyType | undefined), call: v1201.Call} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('Proxy.proxy') === 'eea0572ff11032bd0a82d360fee573c3f0f8c4ff5ba30945f807ed0a79eec754'
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get asV1300(): {real: v1300.AccountId20, forceProxyType: (v1300.ProxyType | undefined), call: v1300.Call} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('Proxy.proxy') === 'ad559668763377c86152d7f0fcf3a7ab528a50dbc2bd9bf311e80ab4b127e31e'
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get asV1401(): {real: v1401.AccountId20, forceProxyType: (v1401.ProxyType | undefined), call: v1401.Call} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('Proxy.proxy') === '16c20068b2be9c40354b2bc99862a532ab36a02b26338e0875c4f9c87fc8ef49'
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get asV1502(): {real: v1502.AccountId20, forceProxyType: (v1502.ProxyType | undefined), call: v1502.Call} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('Proxy.proxy') === 'eda8c4f80b24019e03fdc42e0400a1d6287d6e0d5633f57ef057101a99501fa8'
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorised for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get asV1606(): {real: v1606.AccountId20, forceProxyType: (v1606.ProxyType | undefined), call: v1606.Call} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyProxyAnnouncedCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.proxy_announced')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorized for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Proxy.proxy_announced') === '0fb07bde2e650e5e91504a1c1244a59df5b7907b2182da9b2a8d46d0bf57d184'
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorized for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get asV900(): {delegate: v900.H160, real: v900.H160, forceProxyType: (v900.ProxyType | undefined), call: v900.Call} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorized for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('Proxy.proxy_announced') === 'ae74b64501da74548612f13e94f3f5d4b76084b5e2569da8aa46d15b78193a16'
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorized for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get asV1001(): {delegate: v1001.AccountId20, real: v1001.AccountId20, forceProxyType: (v1001.ProxyType | undefined), call: v1001.Call} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorized for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get isV1101(): boolean {
    return this._chain.getCallHash('Proxy.proxy_announced') === 'd374131b5bd71eaabbcd95751324c711a7d36b913a123f7c6a77e2d4c7e9de56'
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorized for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get asV1101(): {delegate: v1101.AccountId20, real: v1101.AccountId20, forceProxyType: (v1101.ProxyType | undefined), call: v1101.Call} {
    assert(this.isV1101)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorized for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Proxy.proxy_announced') === '7bce05341a2b052647ae190fbba3f379f4eaccad9fb8e8e29df898265fa6e1dc'
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorized for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get asV1201(): {delegate: v1201.AccountId20, real: v1201.AccountId20, forceProxyType: (v1201.ProxyType | undefined), call: v1201.Call} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorized for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('Proxy.proxy_announced') === '53994bfe322e75a8781af95de2d17e14d37dcf8ebecb45063a65767d18ecce49'
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorized for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get asV1300(): {delegate: v1300.AccountId20, real: v1300.AccountId20, forceProxyType: (v1300.ProxyType | undefined), call: v1300.Call} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorized for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('Proxy.proxy_announced') === '3c6bb3dfbc42126c6d35cfe8a6e7e81b5db046288e7ec61d92b5e425b613c449'
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorized for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get asV1401(): {delegate: v1401.AccountId20, real: v1401.AccountId20, forceProxyType: (v1401.ProxyType | undefined), call: v1401.Call} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorized for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('Proxy.proxy_announced') === '2468cb8cdd20b4840298472f5d6a4717c665ffbfde45879545ab51352e232dd3'
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorized for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get asV1502(): {delegate: v1502.AccountId20, real: v1502.AccountId20, forceProxyType: (v1502.ProxyType | undefined), call: v1502.Call} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorized for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('Proxy.proxy_announced') === '26459656650736f12ca9aeac036d41ae8d9d30ea936cc30cb862a542807f824b'
  }

  /**
   * Dispatch the given `call` from an account that the sender is authorized for through
   * `add_proxy`.
   * 
   * Removes any corresponding announcement(s).
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
   * - `call`: The call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get asV1606(): {delegate: v1606.AccountId20, real: v1606.AccountId20, forceProxyType: (v1606.ProxyType | undefined), call: v1606.Call} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyRejectAnnouncementCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.reject_announcement')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove the given announcement of a delegate.
   * 
   * May be called by a target (proxied) account to remove a call that one of their delegates
   * (`delegate`) has announced they want to execute. The deposit is returned.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `delegate`: The account that previously announced the call.
   * - `call_hash`: The hash of the call to be made.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Proxy.reject_announcement') === '2cb7d820f5c7502b3902f6bac78f714e097ec5ecf7f596f8dfaf95f0ffa73b22'
  }

  /**
   * Remove the given announcement of a delegate.
   * 
   * May be called by a target (proxied) account to remove a call that one of their delegates
   * (`delegate`) has announced they want to execute. The deposit is returned.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `delegate`: The account that previously announced the call.
   * - `call_hash`: The hash of the call to be made.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get asV900(): {delegate: v900.H160, callHash: v900.H256} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyRemoveAnnouncementCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.remove_announcement')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove a given announcement.
   * 
   * May be called by a proxy account to remove a call they previously announced and return
   * the deposit.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `call_hash`: The hash of the call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Proxy.remove_announcement') === '3ca49cb5a26ad6c122398f7fe8a5a9632ecec61e2fd72dd0add1de10582c9c81'
  }

  /**
   * Remove a given announcement.
   * 
   * May be called by a proxy account to remove a call they previously announced and return
   * the deposit.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `real`: The account that the proxy will make a call on behalf of.
   * - `call_hash`: The hash of the call to be made by the `real` account.
   * 
   * # <weight>
   * Weight is a function of:
   * - A: the number of announcements made.
   * - P: the number of proxies the user has.
   * # </weight>
   */
  get asV900(): {real: v900.H160, callHash: v900.H256} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyRemoveProxiesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.remove_proxies')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Unregister all proxy accounts for the sender.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * WARNING: This may be called on accounts created by `anonymous`, however if done, then
   * the unreserved fees will be inaccessible. **All access to this account will be lost.**
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Proxy.remove_proxies') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Unregister all proxy accounts for the sender.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * WARNING: This may be called on accounts created by `anonymous`, however if done, then
   * the unreserved fees will be inaccessible. **All access to this account will be lost.**
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get asV900(): null {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyRemoveProxyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.remove_proxy')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Unregister a proxy account for the sender.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `proxy`: The account that the `caller` would like to remove as a proxy.
   * - `proxy_type`: The permissions currently enabled for the removed proxy account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Proxy.remove_proxy') === '42ed786b62d8effa8454803f1bc18368a3887ecc20b519a0de210a1672f17ec0'
  }

  /**
   * Unregister a proxy account for the sender.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * Parameters:
   * - `proxy`: The account that the `caller` would like to remove as a proxy.
   * - `proxy_type`: The permissions currently enabled for the removed proxy account.
   * 
   * # <weight>
   * Weight is a function of the number of proxies the user has (P).
   * # </weight>
   */
  get asV900(): {delegate: v900.H160, proxyType: v900.ProxyType, delay: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class SchedulerCancelCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Scheduler.cancel')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel an anonymously scheduled task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 22.15 + 2.869 * S µs
   * - DB Weight:
   *     - Read: Agenda
   *     - Write: Agenda, Lookup
   * - Will use base weight of 100 which should be good for up to 30 scheduled calls
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Scheduler.cancel') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
  }

  /**
   * Cancel an anonymously scheduled task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 22.15 + 2.869 * S µs
   * - DB Weight:
   *     - Read: Agenda
   *     - Write: Agenda, Lookup
   * - Will use base weight of 100 which should be good for up to 30 scheduled calls
   * # </weight>
   */
  get asV900(): {when: number, index: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class SchedulerCancelNamedCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Scheduler.cancel_named')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel a named scheduled task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 24.91 + 2.907 * S µs
   * - DB Weight:
   *     - Read: Agenda, Lookup
   *     - Write: Agenda, Lookup
   * - Will use base weight of 100 which should be good for up to 30 scheduled calls
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Scheduler.cancel_named') === 'a0b847240e1232c10a62578340a2af6708e760669b06344b70c15e6370b514cf'
  }

  /**
   * Cancel a named scheduled task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 24.91 + 2.907 * S µs
   * - DB Weight:
   *     - Read: Agenda, Lookup
   *     - Write: Agenda, Lookup
   * - Will use base weight of 100 which should be good for up to 30 scheduled calls
   * # </weight>
   */
  get asV900(): {id: Uint8Array} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class SchedulerScheduleCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Scheduler.schedule')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Anonymously schedule a task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 22.29 + .126 * S µs
   * - DB Weight:
   *     - Read: Agenda
   *     - Write: Agenda
   * - Will use base weight of 25 which should be good for up to 30 scheduled calls
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === '81c3a9a52756e2fca6658b7a5ad40e28210c5d539de07eea358a5caf594aea83'
  }

  /**
   * Anonymously schedule a task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 22.29 + .126 * S µs
   * - DB Weight:
   *     - Read: Agenda
   *     - Write: Agenda
   * - Will use base weight of 25 which should be good for up to 30 scheduled calls
   * # </weight>
   */
  get asV900(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v900.Call} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 22.29 + .126 * S µs
   * - DB Weight:
   *     - Read: Agenda
   *     - Write: Agenda
   * - Will use base weight of 25 which should be good for up to 30 scheduled calls
   * # </weight>
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === '8c27864128b19ef70b9f849f490315d5fbed0f4728eb3cf3fc9b573b0a794930'
  }

  /**
   * Anonymously schedule a task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 22.29 + .126 * S µs
   * - DB Weight:
   *     - Read: Agenda
   *     - Write: Agenda
   * - Will use base weight of 25 which should be good for up to 30 scheduled calls
   * # </weight>
   */
  get asV1001(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1001.Call} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 22.29 + .126 * S µs
   * - DB Weight:
   *     - Read: Agenda
   *     - Write: Agenda
   * - Will use base weight of 25 which should be good for up to 30 scheduled calls
   * # </weight>
   */
  get isV1101(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === '874d0d5bb302f9f73e78f73194938751c4904c7ddf9f218b0e65049c86cb5303'
  }

  /**
   * Anonymously schedule a task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 22.29 + .126 * S µs
   * - DB Weight:
   *     - Read: Agenda
   *     - Write: Agenda
   * - Will use base weight of 25 which should be good for up to 30 scheduled calls
   * # </weight>
   */
  get asV1101(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1101.Call} {
    assert(this.isV1101)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === '3ba829de5fb3fdbc8d6078d58762c6d99ceb48c44208b34206c9ae494d2c4ff2'
  }

  /**
   * Anonymously schedule a task.
   */
  get asV1201(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1201.Call} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task.
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === '2ce77decc8eccd2e057f09994dfde76c2a157b1f36a4ec2b28a34ff373f22a0c'
  }

  /**
   * Anonymously schedule a task.
   */
  get asV1300(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1300.MaybeHashed} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task.
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === '6dbc4c545288dc0767b3d821b76de428eeb974e7566ddc2b7d0a4c151577bdea'
  }

  /**
   * Anonymously schedule a task.
   */
  get asV1401(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1401.MaybeHashed} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task.
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === '466e225c39ee76207af152e90beb5f2f98d3bb861c400fea5c2527ae03dcd522'
  }

  /**
   * Anonymously schedule a task.
   */
  get asV1502(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1502.MaybeHashed} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task.
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === 'e96d4dc9164f9ed99efe9cf9ceec1ab2a058b95191c73adeceddfae08e081eeb'
  }

  /**
   * Anonymously schedule a task.
   */
  get asV1606(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1606.MaybeHashed} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class SchedulerScheduleAfterCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Scheduler.schedule_after')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === '45a7a155a98faa8378ba40f9903d25686b3ac3f935bbc2cd9d3bb37e8fd02a27'
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get asV900(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v900.Call} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === '2c579ae2587f7099499b80e858c1dbf0da88d1627e8360066f33498ccdfa8215'
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get asV1001(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1001.Call} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get isV1101(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === '7a03e0e4979d275a812bbb9db00c21ba5625ab7cc2c5453f0a7503e3fbf711af'
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get asV1101(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1101.Call} {
    assert(this.isV1101)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === '2af1deac529c4578dfdfb1fc5c7693c820dcec3a7e49a0a1c1d2bcbd0e5813ec'
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get asV1201(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1201.Call} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === '48e7743851567963d732bd8e7c0b158d832c72b0a3e2769ea9b91106284db286'
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get asV1300(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1300.MaybeHashed} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === '1247208a69c4b1894106cab526a0c15d56f28430a74be889097563e578097287'
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get asV1401(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1401.MaybeHashed} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === '019e64c0828da69712a86eca70c18e070848b4befa247ddaa85e4447c59e2cd4'
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get asV1502(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1502.MaybeHashed} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === '3127f09d3df7871037401a2f21fc51a5f4b23ad146b99be6305a9a726964921a'
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get asV1606(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1606.MaybeHashed} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class SchedulerScheduleNamedCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Scheduler.schedule_named')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Schedule a named task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 29.6 + .159 * S µs
   * - DB Weight:
   *     - Read: Agenda, Lookup
   *     - Write: Agenda, Lookup
   * - Will use base weight of 35 which should be good for more than 30 scheduled calls
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === '1865993c2b1fe29d827129940d124cd771fb48ae03a14fa8bca077700675a646'
  }

  /**
   * Schedule a named task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 29.6 + .159 * S µs
   * - DB Weight:
   *     - Read: Agenda, Lookup
   *     - Write: Agenda, Lookup
   * - Will use base weight of 35 which should be good for more than 30 scheduled calls
   * # </weight>
   */
  get asV900(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v900.Call} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 29.6 + .159 * S µs
   * - DB Weight:
   *     - Read: Agenda, Lookup
   *     - Write: Agenda, Lookup
   * - Will use base weight of 35 which should be good for more than 30 scheduled calls
   * # </weight>
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === 'd4103f1c30874885aef7e8badafc03a6c599e51c26781578e4f97525cffc44e7'
  }

  /**
   * Schedule a named task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 29.6 + .159 * S µs
   * - DB Weight:
   *     - Read: Agenda, Lookup
   *     - Write: Agenda, Lookup
   * - Will use base weight of 35 which should be good for more than 30 scheduled calls
   * # </weight>
   */
  get asV1001(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1001.Call} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 29.6 + .159 * S µs
   * - DB Weight:
   *     - Read: Agenda, Lookup
   *     - Write: Agenda, Lookup
   * - Will use base weight of 35 which should be good for more than 30 scheduled calls
   * # </weight>
   */
  get isV1101(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === '67f87fd2034adae71a95a6bc94e5cffe20381f6f98a1e8325f1658a12b2a46f9'
  }

  /**
   * Schedule a named task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 29.6 + .159 * S µs
   * - DB Weight:
   *     - Read: Agenda, Lookup
   *     - Write: Agenda, Lookup
   * - Will use base weight of 35 which should be good for more than 30 scheduled calls
   * # </weight>
   */
  get asV1101(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1101.Call} {
    assert(this.isV1101)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === 'e41fa7567a7b4727bb36daf160b6e90c2691f899a351b73ae67f13afb9cf9d98'
  }

  /**
   * Schedule a named task.
   */
  get asV1201(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1201.Call} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task.
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === 'cbbd7094f1ef2c4a14da37be3404b875609749235a004ce25d62c158eb9a979a'
  }

  /**
   * Schedule a named task.
   */
  get asV1300(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1300.MaybeHashed} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task.
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === 'dc31824a4fcd0510b2b2fabfd47ef0a85e2554c4f2efb5f78e0484ea4bb05400'
  }

  /**
   * Schedule a named task.
   */
  get asV1401(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1401.MaybeHashed} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task.
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === 'cc1966dd0e8160f0dfe3ba8adae98fc961fa7ffc0c84d20ea8e3d31bde47bfce'
  }

  /**
   * Schedule a named task.
   */
  get asV1502(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1502.MaybeHashed} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task.
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === '3578b1aab5b51a998ba5d75e135c6d2fbfba2bedb6b3c8ddc4cc309ff9b458df'
  }

  /**
   * Schedule a named task.
   */
  get asV1606(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1606.MaybeHashed} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class SchedulerScheduleNamedAfterCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Scheduler.schedule_named_after')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === '7b3bebf85482c69b8001dc68dc3e51b752f395493c711d54b9a6fcfb833c3451'
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get asV900(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v900.Call} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === '64429a89b46ba268fffa8ad0f9f85caa84e8d70815efc58417dd7e028c86403f'
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get asV1001(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1001.Call} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get isV1101(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === '7242de104c04d405b762fcca0627d0dd6eb4542487425026c629472189d0b452'
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get asV1101(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1101.Call} {
    assert(this.isV1101)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === '3ff7280cd3c769f89960f4a78f2a4090b0ffdc093500000d58e42c5970475577'
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get asV1201(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1201.Call} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === '54a11b8482e7d7df5291f9e758d93e410cad57fd537184df1a4b8a695d543b4b'
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get asV1300(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1300.MaybeHashed} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === 'ee02f0b5b80d095708c4ac45be692e490e42b060a49c781d440d359550d52450'
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get asV1401(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1401.MaybeHashed} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === '820722dc546c5fa4de30cfeac43de90f6e7cac5dc711e8dae513674038a44945'
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get asV1502(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1502.MaybeHashed} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === '8f640e4dbeb994a0c3b085cf4afb9194e0a5b166fef0320b37268a7afb93a4a1'
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get asV1606(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1606.MaybeHashed} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class SudoSetKeyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Sudo.set_key')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
   * key.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB change.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Sudo.set_key') === '3c6afa5041fd40be6f0bd612338d44e54b2fc8aedc3ca3dbd6797775549297ba'
  }

  /**
   * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
   * key.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB change.
   * # </weight>
   */
  get asV900(): {new: v900.H160} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class SudoSudoCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Sudo.sudo')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === 'f288f74603e60ca1371bce32740ad3f3a375e73a0a6caaad220c7a770fa4eedb'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV900(): {call: v900.Call} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === 'f7dee54047f14864476c3e197f06099908462afc4ad0aaf6082a621798bc7f4e'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV1001(): {call: v1001.Call} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }
}

export class SudoSudoAsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Sudo.sudo_as')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === '6785cd1a9361ded5b62ebfb77b5ee61af3248d0a6c0abd524044f694de0b4584'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV900(): {who: v900.H160, call: v900.Call} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === '76fd7ce0b738a7d9b905439b75e293b4aef7eae48db93154b5a2424d46200d82'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Signed` origin from
   * a given account.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + 10,000.
   * # </weight>
   */
  get asV1001(): {who: v1001.AccountId20, call: v1001.Call} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }
}

export class SudoSudoUncheckedWeightCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Sudo.sudo_unchecked_weight')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '2abf75012b2c5fa85131c0d0aad743bb608d7eada47432e36f895d5efd3bcaf2'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get asV900(): {call: v900.Call, weight: bigint} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '69eef590c79f6c47b6a85d277c493f11dfd884ecf747144457f68c8d9877b04c'
  }

  /**
   * Authenticates the sudo key and dispatches a function call with `Root` origin.
   * This function does not check the weight of the call, and instead allows the
   * Sudo user to specify the weight of the call.
   * 
   * The dispatch origin for this call must be _Signed_.
   * 
   * # <weight>
   * - O(1).
   * - The weight of this call is defined by the caller.
   * # </weight>
   */
  get asV1001(): {call: v1001.Call, weight: bigint} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemFillBlockCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.fill_block')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * A dispatch that will fill the block weight up to the given ratio.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('System.fill_block') === '41c1841312db092642508be699e4a3f54d52efe2dcaa8101ca9518398fb70c49'
  }

  /**
   * A dispatch that will fill the block weight up to the given ratio.
   */
  get asV900(): {ratio: v900.Perbill} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemKillPrefixCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.kill_prefix')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Kill all storage items with a key that starts with the given prefix.
   * 
   * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
   * the prefix we are removing to accurately calculate the weight of this function.
   * 
   * # <weight>
   * - `O(P)` where `P` amount of keys with prefix `prefix`
   * - `P` storage deletions.
   * - Base Weight: 0.834 * P µs
   * - Writes: Number of subkeys + 1
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('System.kill_prefix') === 'dfbadd42bee8b18fc81cf78683511061181cffbf7a8ebfd3e5719c389b373d93'
  }

  /**
   * Kill all storage items with a key that starts with the given prefix.
   * 
   * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
   * the prefix we are removing to accurately calculate the weight of this function.
   * 
   * # <weight>
   * - `O(P)` where `P` amount of keys with prefix `prefix`
   * - `P` storage deletions.
   * - Base Weight: 0.834 * P µs
   * - Writes: Number of subkeys + 1
   * # </weight>
   */
  get asV900(): {prefix: Uint8Array, subkeys: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemKillStorageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.kill_storage')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Kill some items from storage.
   * 
   * # <weight>
   * - `O(IK)` where `I` length of `keys` and `K` length of one key
   * - `I` storage deletions.
   * - Base Weight: .378 * i µs
   * - Writes: Number of items
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('System.kill_storage') === 'eac21dc14e927c003d9c634fb019d04128f71f8529d2914b10a56b85289c2c11'
  }

  /**
   * Kill some items from storage.
   * 
   * # <weight>
   * - `O(IK)` where `I` length of `keys` and `K` length of one key
   * - `I` storage deletions.
   * - Base Weight: .378 * i µs
   * - Writes: Number of items
   * # </weight>
   */
  get asV900(): {keys: Uint8Array[]} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemRemarkCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.remark')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Make some on-chain remark.
   * 
   * # <weight>
   * - `O(1)`
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
  }

  /**
   * Make some on-chain remark.
   * 
   * # <weight>
   * - `O(1)`
   * # </weight>
   */
  get asV900(): {remark: Uint8Array} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemRemarkWithEventCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.remark_with_event')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Make some on-chain remark and emit event.
   * 
   * # <weight>
   * - `O(b)` where b is the length of the remark.
   * - 1 event.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('System.remark_with_event') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
  }

  /**
   * Make some on-chain remark and emit event.
   * 
   * # <weight>
   * - `O(b)` where b is the length of the remark.
   * - 1 event.
   * # </weight>
   */
  get asV900(): {remark: Uint8Array} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetChangesTrieConfigCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_changes_trie_config')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the new changes trie configuration.
   * 
   * # <weight>
   * - `O(1)`
   * - 1 storage write or delete (codec `O(1)`).
   * - 1 call to `deposit_log`: Uses `append` API, so O(1)
   * - Base Weight: 7.218 µs
   * - DB Weight:
   *     - Writes: Changes Trie, System Digest
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('System.set_changes_trie_config') === 'ced137e2f8792ce87e1f2b20f97e1de9a31001f9c44069dc6e73b9e4c061c311'
  }

  /**
   * Set the new changes trie configuration.
   * 
   * # <weight>
   * - `O(1)`
   * - 1 storage write or delete (codec `O(1)`).
   * - 1 call to `deposit_log`: Uses `append` API, so O(1)
   * - Base Weight: 7.218 µs
   * - DB Weight:
   *     - Writes: Changes Trie, System Digest
   * # </weight>
   */
  get asV900(): {changesTrieConfig: (v900.ChangesTrieConfiguration | undefined)} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetCodeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_code')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the new runtime code.
   * 
   * # <weight>
   * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
   * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
   *   expensive).
   * - 1 storage write (codec `O(C)`).
   * - 1 digest item.
   * - 1 event.
   * The weight of this function is dependent on the runtime, but generally this is very
   * expensive. We will treat this as a full block.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('System.set_code') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
  }

  /**
   * Set the new runtime code.
   * 
   * # <weight>
   * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
   * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
   *   expensive).
   * - 1 storage write (codec `O(C)`).
   * - 1 digest item.
   * - 1 event.
   * The weight of this function is dependent on the runtime, but generally this is very
   * expensive. We will treat this as a full block.
   * # </weight>
   */
  get asV900(): {code: Uint8Array} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetCodeWithoutChecksCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_code_without_checks')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the new runtime code without doing any checks of the given `code`.
   * 
   * # <weight>
   * - `O(C)` where `C` length of `code`
   * - 1 storage write (codec `O(C)`).
   * - 1 digest item.
   * - 1 event.
   * The weight of this function is dependent on the runtime. We will treat this as a full
   * block. # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('System.set_code_without_checks') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
  }

  /**
   * Set the new runtime code without doing any checks of the given `code`.
   * 
   * # <weight>
   * - `O(C)` where `C` length of `code`
   * - 1 storage write (codec `O(C)`).
   * - 1 digest item.
   * - 1 event.
   * The weight of this function is dependent on the runtime. We will treat this as a full
   * block. # </weight>
   */
  get asV900(): {code: Uint8Array} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetHeapPagesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_heap_pages')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the number of pages in the WebAssembly environment's heap.
   * 
   * # <weight>
   * - `O(1)`
   * - 1 storage write.
   * - Base Weight: 1.405 µs
   * - 1 write to HEAP_PAGES
   * - 1 digest item
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('System.set_heap_pages') === '130172e47c5e517627712b4d084768b98489d920284223ea8ef9c462339b5808'
  }

  /**
   * Set the number of pages in the WebAssembly environment's heap.
   * 
   * # <weight>
   * - `O(1)`
   * - 1 storage write.
   * - Base Weight: 1.405 µs
   * - 1 write to HEAP_PAGES
   * - 1 digest item
   * # </weight>
   */
  get asV900(): {pages: bigint} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetStorageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_storage')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set some items of storage.
   * 
   * # <weight>
   * - `O(I)` where `I` length of `items`
   * - `I` storage writes (`O(1)`).
   * - Base Weight: 0.568 * i µs
   * - Writes: Number of items
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('System.set_storage') === 'a4fb507615d69849afb1b2ee654006f9be48bb6e960a4674624d6e46e4382083'
  }

  /**
   * Set some items of storage.
   * 
   * # <weight>
   * - `O(I)` where `I` length of `items`
   * - `I` storage writes (`O(1)`).
   * - Base Weight: 0.568 * i µs
   * - Writes: Number of items
   * # </weight>
   */
  get asV900(): {items: [Uint8Array, Uint8Array][]} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class TechCommitteeCollectiveCloseCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'TechCommitteeCollective.close')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Close a vote that is either approved, disapproved or whose voting period has ended.
   * 
   * May be called by any signed account in order to finish voting and close the proposal.
   * 
   * If called before the end of the voting period it will only close the vote if it is
   * has enough votes to be approved or disapproved.
   * 
   * If called after the end of the voting period abstentions are counted as rejections
   * unless there is a prime member set and the prime member cast an approval.
   * 
   * If the close operation completes successfully with disapproval, the transaction fee will
   * be waived. Otherwise execution of the approved operation will be charged to the caller.
   * 
   * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
   * proposal.
   * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
   * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1 + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - `P1` is the complexity of `proposal` preimage.
   *   - `P2` is proposal-count (code-bounded)
   * - DB:
   *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
   *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
   *    `O(P2)`)
   *  - any mutations done while executing `proposal` (`P1`)
   * - up to 3 events
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
  }

  /**
   * Close a vote that is either approved, disapproved or whose voting period has ended.
   * 
   * May be called by any signed account in order to finish voting and close the proposal.
   * 
   * If called before the end of the voting period it will only close the vote if it is
   * has enough votes to be approved or disapproved.
   * 
   * If called after the end of the voting period abstentions are counted as rejections
   * unless there is a prime member set and the prime member cast an approval.
   * 
   * If the close operation completes successfully with disapproval, the transaction fee will
   * be waived. Otherwise execution of the approved operation will be charged to the caller.
   * 
   * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
   * proposal.
   * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
   * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1 + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - `P1` is the complexity of `proposal` preimage.
   *   - `P2` is proposal-count (code-bounded)
   * - DB:
   *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
   *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
   *    `O(P2)`)
   *  - any mutations done while executing `proposal` (`P1`)
   * - up to 3 events
   * # </weight>
   */
  get asV900(): {proposalHash: v900.H256, index: number, proposalWeightBound: bigint, lengthBound: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class TechCommitteeCollectiveDisapproveProposalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'TechCommitteeCollective.disapprove_proposal')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Disapprove a proposal, close, and remove it from the system, regardless of its current
   * state.
   * 
   * Must be called by the Root origin.
   * 
   * Parameters:
   * * `proposal_hash`: The hash of the proposal that should be disapproved.
   * 
   * # <weight>
   * Complexity: O(P) where P is the number of max proposals
   * DB Weight:
   * * Reads: Proposals
   * * Writes: Voting, Proposals, ProposalOf
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * Disapprove a proposal, close, and remove it from the system, regardless of its current
   * state.
   * 
   * Must be called by the Root origin.
   * 
   * Parameters:
   * * `proposal_hash`: The hash of the proposal that should be disapproved.
   * 
   * # <weight>
   * Complexity: O(P) where P is the number of max proposals
   * DB Weight:
   * * Reads: Proposals
   * * Writes: Voting, Proposals, ProposalOf
   * # </weight>
   */
  get asV900(): {proposalHash: v900.H256} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class TechCommitteeCollectiveExecuteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'TechCommitteeCollective.execute')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.execute') === 'c9113d71d24fdfb988a85391ffc89f62347561f7b01e0ae1459c2a1f0431a150'
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get asV900(): {proposal: v900.Call, lengthBound: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.execute') === '319d51b31bd21e955fa48f065daecf3a48b9d55198713623bd22d0b6827fa83f'
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get asV1001(): {proposal: v1001.Call, lengthBound: number} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get isV1101(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.execute') === '1b328c30dbf8b8efcdd6cdc29bae78ea217b53fb86a9e6da2da135aa90e83df1'
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get asV1101(): {proposal: v1101.Call, lengthBound: number} {
    assert(this.isV1101)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.execute') === '7bdb40aa524801577bf54bf709a131d78f1c3657bf19742c0b79f02d5f412726'
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get asV1201(): {proposal: v1201.Call, lengthBound: number} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.execute') === '439907ddfc4ab9ba45b0541b2aa217db8bbc9293824e0a59a684e827729f5948'
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get asV1300(): {proposal: v1300.Call, lengthBound: number} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.execute') === '6a141f06051ff42cf76e2bb9c0c481876500b349e82220cd690f0f9d6f96366d'
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get asV1401(): {proposal: v1401.Call, lengthBound: number} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.execute') === 'd6cc901718e0bc50fe6c8b205990fd8fd60bc058d4e4a304733e040d257f0a06'
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get asV1502(): {proposal: v1502.Call, lengthBound: number} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.execute') === '59f8675897f96e91bb8f284e7995eb3efe9b516bc96ec67fe18d6f2f52e33094'
  }

  /**
   * Dispatch a proposal from a member using the `Member` origin.
   * 
   * Origin must be a member of the collective.
   * 
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get asV1606(): {proposal: v1606.Call, lengthBound: number} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class TechCommitteeCollectiveProposeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'TechCommitteeCollective.propose')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.propose') === 'a9edf7ffe699a46017fca95f4aaa259e1c0016fd5ab6bda5bcd16824b2d3d9f2'
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get asV900(): {threshold: number, proposal: v900.Call, lengthBound: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.propose') === 'ce756eee67ff886f188bc0ec8c42aa62c8ccc01c5392ece56d70d23177ddda79'
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get asV1001(): {threshold: number, proposal: v1001.Call, lengthBound: number} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get isV1101(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.propose') === '85f1228b33fb2d7525f7108f5e0eeadbb6d1d564d7d3661d6530f937faeca9b1'
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get asV1101(): {threshold: number, proposal: v1101.Call, lengthBound: number} {
    assert(this.isV1101)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.propose') === '487c8cc24372418278743579aa96abcaa4ad858a0dbb3dc5a70660dcedff2965'
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get asV1201(): {threshold: number, proposal: v1201.Call, lengthBound: number} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.propose') === '0f9daeba2340dbb20c8f430dff8dc3212741c2ce67c5308412b677601fe931d6'
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get asV1300(): {threshold: number, proposal: v1300.Call, lengthBound: number} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.propose') === 'a564b5c6959ea1654f5698e3478ec1d7cd22d6aaefde84660b27e219d889eb46'
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get asV1401(): {threshold: number, proposal: v1401.Call, lengthBound: number} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.propose') === 'da4dc06c8c26159ad6c13cc083fd06e4eeefb083031fff6b94f5432072b7f8a1'
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get asV1502(): {threshold: number, proposal: v1502.Call, lengthBound: number} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.propose') === '5247fd0e6cd68c651797eeb11fd3e7b70343f3669fc9735e60c59caa63642860'
  }

  /**
   * Add a new proposal to either be voted on or executed directly.
   * 
   * Requires the sender to be member.
   * 
   * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
   * or put up for voting.
   * 
   * # <weight>
   * ## Weight
   * - `O(B + M + P1)` or `O(B + M + P2)` where:
   *   - `B` is `proposal` size in bytes (length-fee-bounded)
   *   - `M` is members-count (code- and governance-bounded)
   *   - branching is influenced by `threshold` where:
   *     - `P1` is proposal execution complexity (`threshold < 2`)
   *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
   * - DB:
   *   - 1 storage read `is_member` (codec `O(M)`)
   *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
   *   - DB accesses influenced by `threshold`:
   *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
   *     - OR proposal insertion (`threshold <= 2`)
   *       - 1 storage mutation `Proposals` (codec `O(P2)`)
   *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
   *       - 1 storage write `ProposalOf` (codec `O(B)`)
   *       - 1 storage write `Voting` (codec `O(M)`)
   *   - 1 event
   * # </weight>
   */
  get asV1606(): {threshold: number, proposal: v1606.Call, lengthBound: number} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class TechCommitteeCollectiveSetMembersCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'TechCommitteeCollective.set_members')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the collective's membership.
   * 
   * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
   * - `prime`: The prime member whose vote sets the default.
   * - `old_count`: The upper bound for the previous number of members in storage. Used for
   *   weight estimation.
   * 
   * Requires root origin.
   * 
   * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
   *       the weight estimations rely on it to estimate dispatchable weight.
   * 
   * # <weight>
   * ## Weight
   * - `O(MP + N)` where:
   *   - `M` old-members-count (code- and governance-bounded)
   *   - `N` new-members-count (code- and governance-bounded)
   *   - `P` proposals-count (code-bounded)
   * - DB:
   *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
   *     members
   *   - 1 storage read (codec `O(P)`) for reading the proposals
   *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
   *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.set_members') === 'ab6e767d9a6fde9f3ad7e817d7fbd8d0a15f4571d174ffeb4f148566d7ccb879'
  }

  /**
   * Set the collective's membership.
   * 
   * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
   * - `prime`: The prime member whose vote sets the default.
   * - `old_count`: The upper bound for the previous number of members in storage. Used for
   *   weight estimation.
   * 
   * Requires root origin.
   * 
   * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
   *       the weight estimations rely on it to estimate dispatchable weight.
   * 
   * # <weight>
   * ## Weight
   * - `O(MP + N)` where:
   *   - `M` old-members-count (code- and governance-bounded)
   *   - `N` new-members-count (code- and governance-bounded)
   *   - `P` proposals-count (code-bounded)
   * - DB:
   *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
   *     members
   *   - 1 storage read (codec `O(P)`) for reading the proposals
   *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
   *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
   * # </weight>
   */
  get asV900(): {newMembers: v900.H160[], prime: (v900.H160 | undefined), oldCount: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class TechCommitteeCollectiveVoteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'TechCommitteeCollective.vote')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Add an aye or nay vote for the sender to the given proposal.
   * 
   * Requires the sender to be a member.
   * 
   * Transaction fees will be waived if the member is voting on any particular proposal
   * for the first time and the call is successful. Subsequent vote changes will charge a
   * fee.
   * # <weight>
   * ## Weight
   * - `O(M)` where `M` is members-count (code- and governance-bounded)
   * - DB:
   *   - 1 storage read `Members` (codec `O(M)`)
   *   - 1 storage mutation `Voting` (codec `O(M)`)
   * - 1 event
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('TechCommitteeCollective.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
  }

  /**
   * Add an aye or nay vote for the sender to the given proposal.
   * 
   * Requires the sender to be a member.
   * 
   * Transaction fees will be waived if the member is voting on any particular proposal
   * for the first time and the call is successful. Subsequent vote changes will charge a
   * fee.
   * # <weight>
   * ## Weight
   * - `O(M)` where `M` is members-count (code- and governance-bounded)
   * - DB:
   *   - 1 storage read `Members` (codec `O(M)`)
   *   - 1 storage mutation `Voting` (codec `O(M)`)
   * - 1 event
   * # </weight>
   */
  get asV900(): {proposal: v900.H256, index: number, approve: boolean} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class TimestampSetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Timestamp.set')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the current time.
   * 
   * This call should be invoked exactly once per block. It will panic at the finalization
   * phase, if this call hasn't been invoked by that time.
   * 
   * The timestamp should be greater than the previous one by the amount specified by
   * `MinimumPeriod`.
   * 
   * The dispatch origin for this call must be `Inherent`.
   * 
   * # <weight>
   * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
   * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
   *   `on_finalize`)
   * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Timestamp.set') === '6a8b8ba2be107f0853b674eec0026cc440b314db44d0e2c59b36e353355aed14'
  }

  /**
   * Set the current time.
   * 
   * This call should be invoked exactly once per block. It will panic at the finalization
   * phase, if this call hasn't been invoked by that time.
   * 
   * The timestamp should be greater than the previous one by the amount specified by
   * `MinimumPeriod`.
   * 
   * The dispatch origin for this call must be `Inherent`.
   * 
   * # <weight>
   * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
   * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
   *   `on_finalize`)
   * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
   * # </weight>
   */
  get asV900(): {now: bigint} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class TreasuryApproveProposalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Treasury.approve_proposal')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
   * and the original deposit will be returned.
   * 
   * May only be called from `T::ApproveOrigin`.
   * 
   * # <weight>
   * - Complexity: O(1).
   * - DbReads: `Proposals`, `Approvals`
   * - DbWrite: `Approvals`
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Treasury.approve_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
  }

  /**
   * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
   * and the original deposit will be returned.
   * 
   * May only be called from `T::ApproveOrigin`.
   * 
   * # <weight>
   * - Complexity: O(1).
   * - DbReads: `Proposals`, `Approvals`
   * - DbWrite: `Approvals`
   * # </weight>
   */
  get asV900(): {proposalId: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class TreasuryProposeSpendCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Treasury.propose_spend')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Put forward a suggestion for spending. A deposit proportional to the value
   * is reserved and slashed if the proposal is rejected. It is returned once the
   * proposal is awarded.
   * 
   * # <weight>
   * - Complexity: O(1)
   * - DbReads: `ProposalCount`, `origin account`
   * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Treasury.propose_spend') === 'ba88714a5026bdc74af6941e101a5c6b2139025ed6d0da438690d7b726cf270e'
  }

  /**
   * Put forward a suggestion for spending. A deposit proportional to the value
   * is reserved and slashed if the proposal is rejected. It is returned once the
   * proposal is awarded.
   * 
   * # <weight>
   * - Complexity: O(1)
   * - DbReads: `ProposalCount`, `origin account`
   * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
   * # </weight>
   */
  get asV900(): {value: bigint, beneficiary: v900.H160} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class TreasuryRejectProposalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Treasury.reject_proposal')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Reject a proposed spend. The original deposit will be slashed.
   * 
   * May only be called from `T::RejectOrigin`.
   * 
   * # <weight>
   * - Complexity: O(1)
   * - DbReads: `Proposals`, `rejected proposer account`
   * - DbWrites: `Proposals`, `rejected proposer account`
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Treasury.reject_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
  }

  /**
   * Reject a proposed spend. The original deposit will be slashed.
   * 
   * May only be called from `T::RejectOrigin`.
   * 
   * # <weight>
   * - Complexity: O(1)
   * - DbReads: `Proposals`, `rejected proposer account`
   * - DbWrites: `Proposals`, `rejected proposer account`
   * # </weight>
   */
  get asV900(): {proposalId: number} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }
}

export class UtilityAsDerivativeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Utility.as_derivative')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '4913e0b809cee3a6da7f25638074665027b639d33aa51380e87d600b94be7a23'
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get asV900(): {index: number, call: v900.Call} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === 'b15788e0ae72e69c581a528f5479d8801cbd2ffc0dbe65016a69bbee83f76328'
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get asV1001(): {index: number, call: v1001.Call} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get isV1101(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === 'e67f98519d7729f87917e3b132dce2f7d966702186ce2fad6bfff86963c9cf7e'
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get asV1101(): {index: number, call: v1101.Call} {
    assert(this.isV1101)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === 'de86136d141468f3b6e84f59bcc64bcdfe1fe3d95c4dba30f7c684bddbd099cd'
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get asV1201(): {index: number, call: v1201.Call} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '28c013d1874277f1da4136cbba0367d3e3e7ab97645ea880af0d17a42dd2b73c'
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get asV1300(): {index: number, call: v1300.Call} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '06594c16073480cba847e8ec62e657d525b83b9a8cfef466f2dc834bc482852d'
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get asV1401(): {index: number, call: v1401.Call} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '29afb391cb9a22742d0e2e3996bbdc68d6b65348eb5a42bc3de5251f96a9c123'
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get asV1502(): {index: number, call: v1502.Call} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '3d4b5b864a646be05a591ea6ef3746d242618c242b05b423d9afb2e9d7dbddda'
  }

  /**
   * Send a call through an indexed pseudonym of the sender.
   * 
   * Filter from origin are passed along. The call will be dispatched with an origin which
   * use the same filter as the origin of this call.
   * 
   * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
   * because you expect `proxy` to have been used prior in the call stack and you do not want
   * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
   * in the Multisig pallet instead.
   * 
   * NOTE: Prior to version *12, this was called `as_limited_sub`.
   * 
   * The dispatch origin for this call must be _Signed_.
   */
  get asV1606(): {index: number, call: v1606.Call} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class UtilityBatchCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Utility.batch')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Utility.batch') === '3744146b06477c825db8ffffd8f09ba70161e8ce81869e7b4144a8fde33a6c47'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV900(): {calls: v900.Call[]} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('Utility.batch') === 'b38f02dfa8583bbf536876c2b3ae618aadb6adf58ea2697341263d6787d9cf47'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV1001(): {calls: v1001.Call[]} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV1101(): boolean {
    return this._chain.getCallHash('Utility.batch') === 'f034a9c690597fb3a1b907c61ba367156f76bd962df24ca03f94dceb8a12fed3'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV1101(): {calls: v1101.Call[]} {
    assert(this.isV1101)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Utility.batch') === 'b29e3b41bfc81abf3a47a621918c3fb5f3abffd49bc1fe43c74e53aa5fc96740'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV1201(): {calls: v1201.Call[]} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('Utility.batch') === '79d81e1458dc4f7d90d1b3eada225f61092b682cef5ed3d419f6b721eb2abfc8'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV1300(): {calls: v1300.Call[]} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('Utility.batch') === '16e7b255768109060a6326e38f0c8854d93d25be0a7661eec76020c49bd3efe5'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV1401(): {calls: v1401.Call[]} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('Utility.batch') === 'b5529d08bd35aa83bdd8ce0d95fd988f43a001329d5ab87bc8655a2221d80911'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV1502(): {calls: v1502.Call[]} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('Utility.batch') === '3a19009db6fc4cf20d3be5d0284fecbf307e4a800ac2e0ccfcc67638435a3bb7'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   * 
   * This will return `Ok` in all circumstances. To determine the success of the batch, an
   * event is deposited. If a call failed and the batch was interrupted, then the
   * `BatchInterrupted` event is deposited, along with the number of successful calls made
   * and the error of the failed call. If all were successful, then the `BatchCompleted`
   * event is deposited.
   */
  get asV1606(): {calls: v1606.Call[]} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class UtilityBatchAllCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Utility.batch_all')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV900(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === '3744146b06477c825db8ffffd8f09ba70161e8ce81869e7b4144a8fde33a6c47'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV900(): {calls: v900.Call[]} {
    assert(this.isV900)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === 'b38f02dfa8583bbf536876c2b3ae618aadb6adf58ea2697341263d6787d9cf47'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV1001(): {calls: v1001.Call[]} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV1101(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === 'f034a9c690597fb3a1b907c61ba367156f76bd962df24ca03f94dceb8a12fed3'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV1101(): {calls: v1101.Call[]} {
    assert(this.isV1101)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === 'b29e3b41bfc81abf3a47a621918c3fb5f3abffd49bc1fe43c74e53aa5fc96740'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV1201(): {calls: v1201.Call[]} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === '79d81e1458dc4f7d90d1b3eada225f61092b682cef5ed3d419f6b721eb2abfc8'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV1300(): {calls: v1300.Call[]} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === '16e7b255768109060a6326e38f0c8854d93d25be0a7661eec76020c49bd3efe5'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV1401(): {calls: v1401.Call[]} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === 'b5529d08bd35aa83bdd8ce0d95fd988f43a001329d5ab87bc8655a2221d80911'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV1502(): {calls: v1502.Call[]} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === '3a19009db6fc4cf20d3be5d0284fecbf307e4a800ac2e0ccfcc67638435a3bb7'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV1606(): {calls: v1606.Call[]} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class UtilityDispatchAsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Utility.dispatch_as')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === '579c9fbc4f5a7d600b789794d65693590c61becc98b09340049b689ae0f05861'
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get asV1201(): {asOrigin: v1201.OriginCaller, call: v1201.Call} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === '5ecf69d0a4041a0c24dc599e8fdb2d1329cf26ae54687e13fbe5fcf017b6735a'
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get asV1300(): {asOrigin: v1300.OriginCaller, call: v1300.Call} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === '1c457417b8d03049ae0d21681d8ca1e938bccdfe4b86251297fd63d61de7fa45'
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get asV1401(): {asOrigin: v1401.OriginCaller, call: v1401.Call} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get isV1502(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === 'fa86798cb2a609ab8597452b533223e96eca378374c01a86a7ea5017ca8e881b'
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get asV1502(): {asOrigin: v1502.OriginCaller, call: v1502.Call} {
    assert(this.isV1502)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === 'fac4ab85ca8b97128794b1fd3f7126933075391662e1b4c6ded66ef0be00dadb'
  }

  /**
   * Dispatches a function call with a provided origin.
   * 
   * The dispatch origin for this call must be _Root_.
   * 
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get asV1606(): {asOrigin: v1606.OriginCaller, call: v1606.Call} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class XTokensTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XTokens.transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer native currencies.
   * 
   * `dest_weight` is the weight for XCM execution on the dest chain, and
   * it would be charged from the transferred assets. If set below
   * requirements, the execution may fail and assets wouldn't be
   * received.
   * 
   * It's a no-op if any error on local XCM execution or message sending.
   * Note sending assets out per se doesn't guarantee they would be
   * received. Receiving depends on if the XCM message could be delivered
   * by the network, and if the receiving chain would handle
   * messages correctly.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('XTokens.transfer') === 'ed2adc0bac44587dd3de3d1e0cbc9b14ae9ae45ee18e7281650d5457cad9dfe1'
  }

  /**
   * Transfer native currencies.
   * 
   * `dest_weight` is the weight for XCM execution on the dest chain, and
   * it would be charged from the transferred assets. If set below
   * requirements, the execution may fail and assets wouldn't be
   * received.
   * 
   * It's a no-op if any error on local XCM execution or message sending.
   * Note sending assets out per se doesn't guarantee they would be
   * received. Receiving depends on if the XCM message could be delivered
   * by the network, and if the receiving chain would handle
   * messages correctly.
   */
  get asV1201(): {currencyId: v1201.CurrencyId, amount: bigint, dest: v1201.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Transfer native currencies.
   * 
   * `dest_weight` is the weight for XCM execution on the dest chain, and
   * it would be charged from the transferred assets. If set below
   * requirements, the execution may fail and assets wouldn't be
   * received.
   * 
   * It's a no-op if any error on local XCM execution or message sending.
   * Note sending assets out per se doesn't guarantee they would be
   * received. Receiving depends on if the XCM message could be delivered
   * by the network, and if the receiving chain would handle
   * messages correctly.
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('XTokens.transfer') === '4c1cc43908157eec78af11557e7a787ad619337553ac36b5b2f95c982353342f'
  }

  /**
   * Transfer native currencies.
   * 
   * `dest_weight` is the weight for XCM execution on the dest chain, and
   * it would be charged from the transferred assets. If set below
   * requirements, the execution may fail and assets wouldn't be
   * received.
   * 
   * It's a no-op if any error on local XCM execution or message sending.
   * Note sending assets out per se doesn't guarantee they would be
   * received. Receiving depends on if the XCM message could be delivered
   * by the network, and if the receiving chain would handle
   * messages correctly.
   */
  get asV1401(): {currencyId: v1401.CurrencyId, amount: bigint, dest: v1401.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class XTokensTransferMultiassetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XTokens.transfer_multiasset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer `MultiAsset`.
   * 
   * `dest_weight` is the weight for XCM execution on the dest chain, and
   * it would be charged from the transferred assets. If set below
   * requirements, the execution may fail and assets wouldn't be
   * received.
   * 
   * It's a no-op if any error on local XCM execution or message sending.
   * Note sending assets out per se doesn't guarantee they would be
   * received. Receiving depends on if the XCM message could be delivered
   * by the network, and if the receiving chain would handle
   * messages correctly.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('XTokens.transfer_multiasset') === 'f33cd4d2466c1e767a4c2d9b00f7b71b359b07f3e78d76d466e3928a3e2ed9b8'
  }

  /**
   * Transfer `MultiAsset`.
   * 
   * `dest_weight` is the weight for XCM execution on the dest chain, and
   * it would be charged from the transferred assets. If set below
   * requirements, the execution may fail and assets wouldn't be
   * received.
   * 
   * It's a no-op if any error on local XCM execution or message sending.
   * Note sending assets out per se doesn't guarantee they would be
   * received. Receiving depends on if the XCM message could be delivered
   * by the network, and if the receiving chain would handle
   * messages correctly.
   */
  get asV1201(): {asset: v1201.VersionedMultiAsset, dest: v1201.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class XTokensTransferMultiassetWithFeeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XTokens.transfer_multiasset_with_fee')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer `MultiAsset` specifying the fee and amount as separate.
   * 
   * `dest_weight` is the weight for XCM execution on the dest chain, and
   * it would be charged from the transferred assets. If set below
   * requirements, the execution may fail and assets wouldn't be
   * received.
   * 
   * `fee` is the multiasset to be spent to pay for execution in
   * destination chain. Both fee and amount will be subtracted form the
   * callers balance For now we only accept fee and asset having the same
   * `MultiLocation` id.
   * 
   * If `fee` is not high enough to cover for the execution costs in the
   * destination chain, then the assets will be trapped in the
   * destination chain
   * 
   * It's a no-op if any error on local XCM execution or message sending.
   * Note sending assets out per se doesn't guarantee they would be
   * received. Receiving depends on if the XCM message could be delivered
   * by the network, and if the receiving chain would handle
   * messages correctly.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('XTokens.transfer_multiasset_with_fee') === '72aca3119f971190d4dd5493791879ff41295c5e290079c6179cb41be01e6226'
  }

  /**
   * Transfer `MultiAsset` specifying the fee and amount as separate.
   * 
   * `dest_weight` is the weight for XCM execution on the dest chain, and
   * it would be charged from the transferred assets. If set below
   * requirements, the execution may fail and assets wouldn't be
   * received.
   * 
   * `fee` is the multiasset to be spent to pay for execution in
   * destination chain. Both fee and amount will be subtracted form the
   * callers balance For now we only accept fee and asset having the same
   * `MultiLocation` id.
   * 
   * If `fee` is not high enough to cover for the execution costs in the
   * destination chain, then the assets will be trapped in the
   * destination chain
   * 
   * It's a no-op if any error on local XCM execution or message sending.
   * Note sending assets out per se doesn't guarantee they would be
   * received. Receiving depends on if the XCM message could be delivered
   * by the network, and if the receiving chain would handle
   * messages correctly.
   */
  get asV1201(): {asset: v1201.VersionedMultiAsset, fee: v1201.VersionedMultiAsset, dest: v1201.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class XTokensTransferMultiassetsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XTokens.transfer_multiassets')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer several `MultiAsset` specifying the item to be used as fee
   * 
   * `dest_weight` is the weight for XCM execution on the dest chain, and
   * it would be charged from the transferred assets. If set below
   * requirements, the execution may fail and assets wouldn't be
   * received.
   * 
   * `fee_item` is index of the MultiAssets that we want to use for
   * payment
   * 
   * It's a no-op if any error on local XCM execution or message sending.
   * Note sending assets out per se doesn't guarantee they would be
   * received. Receiving depends on if the XCM message could be delivered
   * by the network, and if the receiving chain would handle
   * messages correctly.
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('XTokens.transfer_multiassets') === '2c9276a8e5652bef69d8e7f6f9bf7caccd48bb5ef0b25b42010d09b4b28b18c5'
  }

  /**
   * Transfer several `MultiAsset` specifying the item to be used as fee
   * 
   * `dest_weight` is the weight for XCM execution on the dest chain, and
   * it would be charged from the transferred assets. If set below
   * requirements, the execution may fail and assets wouldn't be
   * received.
   * 
   * `fee_item` is index of the MultiAssets that we want to use for
   * payment
   * 
   * It's a no-op if any error on local XCM execution or message sending.
   * Note sending assets out per se doesn't guarantee they would be
   * received. Receiving depends on if the XCM message could be delivered
   * by the network, and if the receiving chain would handle
   * messages correctly.
   */
  get asV1300(): {assets: v1300.VersionedMultiAssets, feeItem: number, dest: v1300.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }
}

export class XTokensTransferMulticurrenciesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XTokens.transfer_multicurrencies')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer several currencies specifying the item to be used as fee
   * 
   * `dest_weight` is the weight for XCM execution on the dest chain, and
   * it would be charged from the transferred assets. If set below
   * requirements, the execution may fail and assets wouldn't be
   * received.
   * 
   * `fee_item` is index of the currencies tuple that we want to use for
   * payment
   * 
   * It's a no-op if any error on local XCM execution or message sending.
   * Note sending assets out per se doesn't guarantee they would be
   * received. Receiving depends on if the XCM message could be delivered
   * by the network, and if the receiving chain would handle
   * messages correctly.
   */
  get isV1300(): boolean {
    return this._chain.getCallHash('XTokens.transfer_multicurrencies') === 'daadffca9ba1f4606f559edd831d9c9447ac9e9aa92acf2077ea5db5939e5254'
  }

  /**
   * Transfer several currencies specifying the item to be used as fee
   * 
   * `dest_weight` is the weight for XCM execution on the dest chain, and
   * it would be charged from the transferred assets. If set below
   * requirements, the execution may fail and assets wouldn't be
   * received.
   * 
   * `fee_item` is index of the currencies tuple that we want to use for
   * payment
   * 
   * It's a no-op if any error on local XCM execution or message sending.
   * Note sending assets out per se doesn't guarantee they would be
   * received. Receiving depends on if the XCM message could be delivered
   * by the network, and if the receiving chain would handle
   * messages correctly.
   */
  get asV1300(): {currencies: [v1300.CurrencyId, bigint][], feeItem: number, dest: v1300.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV1300)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Transfer several currencies specifying the item to be used as fee
   * 
   * `dest_weight` is the weight for XCM execution on the dest chain, and
   * it would be charged from the transferred assets. If set below
   * requirements, the execution may fail and assets wouldn't be
   * received.
   * 
   * `fee_item` is index of the currencies tuple that we want to use for
   * payment
   * 
   * It's a no-op if any error on local XCM execution or message sending.
   * Note sending assets out per se doesn't guarantee they would be
   * received. Receiving depends on if the XCM message could be delivered
   * by the network, and if the receiving chain would handle
   * messages correctly.
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('XTokens.transfer_multicurrencies') === '95427277595f3aeef18798476c6abcc0cdf575fc89d7d48d86c06de9377ef3e6'
  }

  /**
   * Transfer several currencies specifying the item to be used as fee
   * 
   * `dest_weight` is the weight for XCM execution on the dest chain, and
   * it would be charged from the transferred assets. If set below
   * requirements, the execution may fail and assets wouldn't be
   * received.
   * 
   * `fee_item` is index of the currencies tuple that we want to use for
   * payment
   * 
   * It's a no-op if any error on local XCM execution or message sending.
   * Note sending assets out per se doesn't guarantee they would be
   * received. Receiving depends on if the XCM message could be delivered
   * by the network, and if the receiving chain would handle
   * messages correctly.
   */
  get asV1401(): {currencies: [v1401.CurrencyId, bigint][], feeItem: number, dest: v1401.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class XTokensTransferWithFeeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XTokens.transfer_with_fee')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer native currencies specifying the fee and amount as
   * separate.
   * 
   * `dest_weight` is the weight for XCM execution on the dest chain, and
   * it would be charged from the transferred assets. If set below
   * requirements, the execution may fail and assets wouldn't be
   * received.
   * 
   * `fee` is the amount to be spent to pay for execution in destination
   * chain. Both fee and amount will be subtracted form the callers
   * balance.
   * 
   * If `fee` is not high enough to cover for the execution costs in the
   * destination chain, then the assets will be trapped in the
   * destination chain
   * 
   * It's a no-op if any error on local XCM execution or message sending.
   * Note sending assets out per se doesn't guarantee they would be
   * received. Receiving depends on if the XCM message could be delivered
   * by the network, and if the receiving chain would handle
   * messages correctly.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('XTokens.transfer_with_fee') === '71801a892f83d1a0e34c2f4e88dba2e58b9f049ed584e66ecdcb1dda8660b878'
  }

  /**
   * Transfer native currencies specifying the fee and amount as
   * separate.
   * 
   * `dest_weight` is the weight for XCM execution on the dest chain, and
   * it would be charged from the transferred assets. If set below
   * requirements, the execution may fail and assets wouldn't be
   * received.
   * 
   * `fee` is the amount to be spent to pay for execution in destination
   * chain. Both fee and amount will be subtracted form the callers
   * balance.
   * 
   * If `fee` is not high enough to cover for the execution costs in the
   * destination chain, then the assets will be trapped in the
   * destination chain
   * 
   * It's a no-op if any error on local XCM execution or message sending.
   * Note sending assets out per se doesn't guarantee they would be
   * received. Receiving depends on if the XCM message could be delivered
   * by the network, and if the receiving chain would handle
   * messages correctly.
   */
  get asV1201(): {currencyId: v1201.CurrencyId, amount: bigint, fee: bigint, dest: v1201.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Transfer native currencies specifying the fee and amount as
   * separate.
   * 
   * `dest_weight` is the weight for XCM execution on the dest chain, and
   * it would be charged from the transferred assets. If set below
   * requirements, the execution may fail and assets wouldn't be
   * received.
   * 
   * `fee` is the amount to be spent to pay for execution in destination
   * chain. Both fee and amount will be subtracted form the callers
   * balance.
   * 
   * If `fee` is not high enough to cover for the execution costs in the
   * destination chain, then the assets will be trapped in the
   * destination chain
   * 
   * It's a no-op if any error on local XCM execution or message sending.
   * Note sending assets out per se doesn't guarantee they would be
   * received. Receiving depends on if the XCM message could be delivered
   * by the network, and if the receiving chain would handle
   * messages correctly.
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('XTokens.transfer_with_fee') === 'e784a5ead979d74d6e152f39b82b847aa82a7a06376b1bc43dab142ecf9c5211'
  }

  /**
   * Transfer native currencies specifying the fee and amount as
   * separate.
   * 
   * `dest_weight` is the weight for XCM execution on the dest chain, and
   * it would be charged from the transferred assets. If set below
   * requirements, the execution may fail and assets wouldn't be
   * received.
   * 
   * `fee` is the amount to be spent to pay for execution in destination
   * chain. Both fee and amount will be subtracted form the callers
   * balance.
   * 
   * If `fee` is not high enough to cover for the execution costs in the
   * destination chain, then the assets will be trapped in the
   * destination chain
   * 
   * It's a no-op if any error on local XCM execution or message sending.
   * Note sending assets out per se doesn't guarantee they would be
   * received. Receiving depends on if the XCM message could be delivered
   * by the network, and if the receiving chain would handle
   * messages correctly.
   */
  get asV1401(): {currencyId: v1401.CurrencyId, amount: bigint, fee: bigint, dest: v1401.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmTransactorDeregisterCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmTransactor.deregister')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * De-Register a derivative index. This prevents an account to use a derivative address
   * (represented by an index) from our of our sovereign accounts anymore
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('XcmTransactor.deregister') === '053daa6536b598f0aa27368ea681761daeadb01c00bc0f60a6fe5f7255582db4'
  }

  /**
   * De-Register a derivative index. This prevents an account to use a derivative address
   * (represented by an index) from our of our sovereign accounts anymore
   */
  get asV1401(): {index: number} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmTransactorRegisterCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmTransactor.register')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Register a derivative index for an account id. Dispatchable by
   * DerivativeAddressRegistrationOrigin
   * 
   * We do not store the derivative address, but only the index. We do not need to store
   * the derivative address to issue calls, only the index is enough
   * 
   * For now an index is registered for all possible destinations and not per-destination.
   * We can change this in the future although it would just make things more complicated
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('XcmTransactor.register') === 'cf8a71eb3ca89c5215b0a1b0dba9e186c2392afd565d1a973900678aae52355e'
  }

  /**
   * Register a derivative index for an account id. Dispatchable by
   * DerivativeAddressRegistrationOrigin
   * 
   * We do not store the derivative address, but only the index. We do not need to store
   * the derivative address to issue calls, only the index is enough
   * 
   * For now an index is registered for all possible destinations and not per-destination.
   * We can change this in the future although it would just make things more complicated
   */
  get asV1201(): {who: v1201.AccountId20, index: number} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmTransactorRemoveFeePerSecondCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmTransactor.remove_fee_per_second')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove the fee per second of an asset on its reserve chain
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('XcmTransactor.remove_fee_per_second') === 'd26643923cd4bc9660d0022775958cdfc8de6b72e3e211a239383fa3f2e9175f'
  }

  /**
   * Remove the fee per second of an asset on its reserve chain
   */
  get asV1606(): {assetLocation: v1606.VersionedMultiLocation} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmTransactorRemoveTransactInfoCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmTransactor.remove_transact_info')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove the transact info of a location
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('XcmTransactor.remove_transact_info') === 'f3f38b2278743e50bfd76c0f778560fb38a60c931275e9df42f2b9ce08c1d6fc'
  }

  /**
   * Remove the transact info of a location
   */
  get asV1401(): {location: v1401.VersionedMultiLocation} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmTransactorSetFeePerSecondCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmTransactor.set_fee_per_second')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the fee per second of an asset on its reserve chain
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('XcmTransactor.set_fee_per_second') === 'fd0a621c4203e732621e1deaf8907f08a50b4efeb40d208a0a1d43f286e9bba3'
  }

  /**
   * Set the fee per second of an asset on its reserve chain
   */
  get asV1606(): {assetLocation: v1606.VersionedMultiLocation, feePerSecond: bigint} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmTransactorSetTransactInfoCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmTransactor.set_transact_info')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Change the transact info of a location
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('XcmTransactor.set_transact_info') === 'b50a460625820d4fdd438adc455ad7b381ee2b3e9223c73ef3d30ede500cda35'
  }

  /**
   * Change the transact info of a location
   */
  get asV1201(): {location: v1201.VersionedMultiLocation, transactExtraWeight: bigint, feePerSecond: bigint, maxWeight: bigint} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Change the transact info of a location
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('XcmTransactor.set_transact_info') === '9a2c137421d70310d3424f9b1282efb6ff76ae6321f22b39c139298af03b4ed9'
  }

  /**
   * Change the transact info of a location
   */
  get asV1606(): {location: v1606.VersionedMultiLocation, transactExtraWeight: bigint, maxWeight: bigint, transactExtraWeightSigned: (bigint | undefined)} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmTransactorTransactThroughDerivativeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmTransactor.transact_through_derivative')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transact the inner call through a derivative account in a destination chain,
   * using 'currency_id' to pay for the fees.
   * 
   * The caller needs to have the index registered in this pallet. The fee multiasset needs
   * to be a reserve asset for the destination transactor::multilocation.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('XcmTransactor.transact_through_derivative') === '99b18ebb5fccf4a7e820f7bd5bfb6250eb3b1eb1147bb4558081499542f84fc4'
  }

  /**
   * Transact the inner call through a derivative account in a destination chain,
   * using 'currency_id' to pay for the fees.
   * 
   * The caller needs to have the index registered in this pallet. The fee multiasset needs
   * to be a reserve asset for the destination transactor::multilocation.
   */
  get asV1201(): {dest: v1201.Transactors, index: number, currencyId: v1201.CurrencyId, destWeight: bigint, innerCall: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Transact the inner call through a derivative account in a destination chain,
   * using 'currency_id' to pay for the fees.
   * 
   * The caller needs to have the index registered in this pallet. The fee multiasset needs
   * to be a reserve asset for the destination transactor::multilocation.
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('XcmTransactor.transact_through_derivative') === 'b4637a0b4e75e9cf79a8d8e956dc0a663a04da3742ed7c014bc9cf10bbeb7bf0'
  }

  /**
   * Transact the inner call through a derivative account in a destination chain,
   * using 'currency_id' to pay for the fees.
   * 
   * The caller needs to have the index registered in this pallet. The fee multiasset needs
   * to be a reserve asset for the destination transactor::multilocation.
   */
  get asV1401(): {dest: v1401.Transactors, index: number, currencyId: v1401.CurrencyId, destWeight: bigint, innerCall: Uint8Array} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmTransactorTransactThroughDerivativeMultilocationCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmTransactor.transact_through_derivative_multilocation')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transact the inner call through a derivative account in a destination chain,
   * using 'fee_location' to pay for the fees. This fee_location is given as a multilocation
   * 
   * The caller needs to have the index registered in this pallet. The fee multiasset needs
   * to be a reserve asset for the destination transactor::multilocation.
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('XcmTransactor.transact_through_derivative_multilocation') === '0c1fd472569b57207d49c2d72a5e6d9232ae3e4f513b813e332b396f88d82ed5'
  }

  /**
   * Transact the inner call through a derivative account in a destination chain,
   * using 'fee_location' to pay for the fees. This fee_location is given as a multilocation
   * 
   * The caller needs to have the index registered in this pallet. The fee multiasset needs
   * to be a reserve asset for the destination transactor::multilocation.
   */
  get asV1201(): {dest: v1201.Transactors, index: number, feeLocation: v1201.VersionedMultiLocation, destWeight: bigint, innerCall: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmTransactorTransactThroughSignedCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmTransactor.transact_through_signed')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transact the call through the a signed origin in this chain
   * that should be converted to a transaction dispatch account in the destination chain
   * by any method implemented in the destination chains runtime
   * 
   * This time we are giving the currency as a currencyId instead of multilocation
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('XcmTransactor.transact_through_signed') === '1d9a5371db6b46cb7979c883a6ee8d34d964539cd8ca313007a9045612a03685'
  }

  /**
   * Transact the call through the a signed origin in this chain
   * that should be converted to a transaction dispatch account in the destination chain
   * by any method implemented in the destination chains runtime
   * 
   * This time we are giving the currency as a currencyId instead of multilocation
   */
  get asV1606(): {dest: v1606.VersionedMultiLocation, feeCurrencyId: v1606.CurrencyId, destWeight: bigint, call: Uint8Array} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmTransactorTransactThroughSignedMultilocationCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmTransactor.transact_through_signed_multilocation')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transact the call through the a signed origin in this chain
   * that should be converted to a transaction dispatch account in the destination chain
   * by any method implemented in the destination chains runtime
   * 
   * This time we are giving the currency as a multilocation instead of currencyId
   */
  get isV1606(): boolean {
    return this._chain.getCallHash('XcmTransactor.transact_through_signed_multilocation') === 'fb3e600a989bc85b6bf2a8e2a78e18a504ebe06cd367827604ac3aacbc00d22b'
  }

  /**
   * Transact the call through the a signed origin in this chain
   * that should be converted to a transaction dispatch account in the destination chain
   * by any method implemented in the destination chains runtime
   * 
   * This time we are giving the currency as a multilocation instead of currencyId
   */
  get asV1606(): {dest: v1606.VersionedMultiLocation, feeLocation: v1606.VersionedMultiLocation, destWeight: bigint, call: Uint8Array} {
    assert(this.isV1606)
    return this._chain.decodeCall(this.call)
  }
}

export class XcmTransactorTransactThroughSovereignCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XcmTransactor.transact_through_sovereign')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transact the call through the sovereign account in a destination chain,
   * 'fee_payer' pays for the fee
   * 
   * SovereignAccountDispatcherOrigin callable only
   */
  get isV1201(): boolean {
    return this._chain.getCallHash('XcmTransactor.transact_through_sovereign') === '8fa2aa9c82a9d26b1b1b867ee073df62962bc09c2f19e64897c65b745b52ab87'
  }

  /**
   * Transact the call through the sovereign account in a destination chain,
   * 'fee_payer' pays for the fee
   * 
   * SovereignAccountDispatcherOrigin callable only
   */
  get asV1201(): {dest: v1201.VersionedMultiLocation, feePayer: v1201.AccountId20, feeLocation: v1201.VersionedMultiLocation, destWeight: bigint, call: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Transact the call through the sovereign account in a destination chain,
   * 'fee_payer' pays for the fee
   * 
   * SovereignAccountDispatcherOrigin callable only
   */
  get isV1401(): boolean {
    return this._chain.getCallHash('XcmTransactor.transact_through_sovereign') === '19ffbde7706e35c8d832a19e9a5bc8e3fa67a4ae0c0d0da47884d1cdd9088356'
  }

  /**
   * Transact the call through the sovereign account in a destination chain,
   * 'fee_payer' pays for the fee
   * 
   * SovereignAccountDispatcherOrigin callable only
   */
  get asV1401(): {dest: v1401.VersionedMultiLocation, feePayer: v1401.AccountId20, feeLocation: v1401.VersionedMultiLocation, destWeight: bigint, call: Uint8Array, originKind: v1401.V0OriginKind} {
    assert(this.isV1401)
    return this._chain.decodeCall(this.call)
  }
}
