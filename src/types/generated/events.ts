import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result} from './support'
import * as v900 from './v900'
import * as v1001 from './v1001'
import * as v1201 from './v1201'
import * as v1300 from './v1300'
import * as v1401 from './v1401'
import * as v1502 from './v1502'
import * as v1606 from './v1606'
import * as v1701 from './v1701'

export class AssetManagerAssetRegisteredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetManager.AssetRegistered')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1201(): boolean {
    return this._chain.getEventHash('AssetManager.AssetRegistered') === 'd9c2746cd1b0cd3f906013c501fa482e910ad01604d6fd0477080a1d0d730a83'
  }

  get asV1201(): [bigint, v1201.AssetType, v1201.AssetRegistrarMetadata] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * New asset with the asset manager is registered
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('AssetManager.AssetRegistered') === 'a4b390a2d9b2399074c4245f34c55a6ea994535e458df5ddffa42dbabcdfbd5f'
  }

  /**
   * New asset with the asset manager is registered
   */
  get asV1300(): {assetId: bigint, asset: v1300.AssetType, metadata: v1300.AssetRegistrarMetadata} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetManagerAssetTypeChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetManager.AssetTypeChanged')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1201(): boolean {
    return this._chain.getEventHash('AssetManager.AssetTypeChanged') === '04091c2f074cda6b26ebe4ef5763e525ef9deeb3d8f6ba2da7c2c35610d4789d'
  }

  get asV1201(): [bigint, v1201.AssetType] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Changed the xcm type mapping for a given asset id
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('AssetManager.AssetTypeChanged') === '374e400d2b4ea9f5d3b638e3602dfe3ed9b4c85b9c86c117b2fe9d45b6bb2fa8'
  }

  /**
   * Changed the xcm type mapping for a given asset id
   */
  get asV1300(): {assetId: bigint, newAssetType: v1300.AssetType} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetManagerForeignAssetDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetManager.ForeignAssetDestroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Removed all information related to an assetId and destroyed asset
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('AssetManager.ForeignAssetDestroyed') === '4a7c12e48a707265b8d79d0a3e8fba78d987f8320d04132f34046bd2a8e2ac1e'
  }

  /**
   * Removed all information related to an assetId and destroyed asset
   */
  get asV1401(): {assetId: bigint, assetType: v1401.AssetType} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetManagerForeignAssetRegisteredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetManager.ForeignAssetRegistered')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New asset with the asset manager is registered
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('AssetManager.ForeignAssetRegistered') === 'a4b390a2d9b2399074c4245f34c55a6ea994535e458df5ddffa42dbabcdfbd5f'
  }

  /**
   * New asset with the asset manager is registered
   */
  get asV1401(): {assetId: bigint, asset: v1401.AssetType, metadata: v1401.AssetRegistrarMetadata} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetManagerForeignAssetRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetManager.ForeignAssetRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Removed all information related to an assetId
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('AssetManager.ForeignAssetRemoved') === '4a7c12e48a707265b8d79d0a3e8fba78d987f8320d04132f34046bd2a8e2ac1e'
  }

  /**
   * Removed all information related to an assetId
   */
  get asV1401(): {assetId: bigint, assetType: v1401.AssetType} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetManagerForeignAssetTypeChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetManager.ForeignAssetTypeChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Changed the xcm type mapping for a given asset id
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('AssetManager.ForeignAssetTypeChanged') === '374e400d2b4ea9f5d3b638e3602dfe3ed9b4c85b9c86c117b2fe9d45b6bb2fa8'
  }

  /**
   * Changed the xcm type mapping for a given asset id
   */
  get asV1401(): {assetId: bigint, newAssetType: v1401.AssetType} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetManagerLocalAssetDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetManager.LocalAssetDestroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Removed all information related to an assetId and destroyed asset
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('AssetManager.LocalAssetDestroyed') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
  }

  /**
   * Removed all information related to an assetId and destroyed asset
   */
  get asV1401(): {assetId: bigint} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetManagerLocalAssetRegisteredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetManager.LocalAssetRegistered')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Local asset was created
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('AssetManager.LocalAssetRegistered') === 'fd62e88c9ea5dc8842e0823fab1341577dbecd6032441c5b3e25acb8e12bc858'
  }

  /**
   * Local asset was created
   */
  get asV1401(): {assetId: bigint, creator: Uint8Array, owner: Uint8Array} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetManagerSupportedAssetRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetManager.SupportedAssetRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Supported asset type for fee payment removed
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('AssetManager.SupportedAssetRemoved') === '31b9db30f4219890a48d186903519db1e182733776ef58fc0d96359cae9a1674'
  }

  /**
   * Supported asset type for fee payment removed
   */
  get asV1300(): {assetType: v1300.AssetType} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetManagerUnitsPerSecondChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetManager.UnitsPerSecondChanged')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1201(): boolean {
    return this._chain.getEventHash('AssetManager.UnitsPerSecondChanged') === '05ac03bce48e981173bbbf88224a3d909ee5f3b59beedd9cee6ec88e072e80c0'
  }

  get asV1201(): [v1201.AssetType, bigint] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Changed the amount of units we are charging per execution second for a given asset
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('AssetManager.UnitsPerSecondChanged') === '6f945a016fa1354dda472a1d8283c850f742893500097ea765948e3c95150daa'
  }

  /**
   * Changed the amount of units we are charging per execution second for a given asset
   */
  get asV1300(): {assetType: v1300.AssetType, unitsPerSecond: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetsApprovalCancelledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Assets.ApprovalCancelled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An approval for account `delegate` was cancelled by `owner`.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Assets.ApprovalCancelled') === '1c909afc9b78187ab7dd247b4eb309bd383560ed4eb9a05fba24117453936d6f'
  }

  /**
   * An approval for account `delegate` was cancelled by `owner`.
   */
  get asV1201(): {assetId: bigint, owner: Uint8Array, delegate: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetsApprovedTransferEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Assets.ApprovedTransfer')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * (Additional) funds have been approved for transfer to a destination account.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Assets.ApprovedTransfer') === '6596d037926575491f74014c174637b2396303408b01a12cd3fed65a43155001'
  }

  /**
   * (Additional) funds have been approved for transfer to a destination account.
   */
  get asV1201(): {assetId: bigint, source: Uint8Array, delegate: Uint8Array, amount: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetsAssetFrozenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Assets.AssetFrozen')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some asset `asset_id` was frozen.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Assets.AssetFrozen') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
  }

  /**
   * Some asset `asset_id` was frozen.
   */
  get asV1201(): {assetId: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetsAssetStatusChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Assets.AssetStatusChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An asset has had its attributes changed by the `Force` origin.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Assets.AssetStatusChanged') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
  }

  /**
   * An asset has had its attributes changed by the `Force` origin.
   */
  get asV1201(): {assetId: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetsAssetThawedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Assets.AssetThawed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some asset `asset_id` was thawed.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Assets.AssetThawed') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
  }

  /**
   * Some asset `asset_id` was thawed.
   */
  get asV1201(): {assetId: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetsBurnedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Assets.Burned')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some assets were destroyed.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Assets.Burned') === '7b313023dcadc0790714779ac69e85195d0b94fbfc5c5b1c65234ca592e0d3f7'
  }

  /**
   * Some assets were destroyed.
   */
  get asV1201(): {assetId: bigint, owner: Uint8Array, balance: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetsCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Assets.Created')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some asset class was created.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Assets.Created') === 'fd62e88c9ea5dc8842e0823fab1341577dbecd6032441c5b3e25acb8e12bc858'
  }

  /**
   * Some asset class was created.
   */
  get asV1201(): {assetId: bigint, creator: Uint8Array, owner: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetsDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Assets.Destroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An asset class was destroyed.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Assets.Destroyed') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
  }

  /**
   * An asset class was destroyed.
   */
  get asV1201(): {assetId: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetsForceCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Assets.ForceCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some asset class was force-created.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Assets.ForceCreated') === 'adc91c9d5229ea6a8721efe274c9a75894b73b14d20a2b4add201bee4d07c152'
  }

  /**
   * Some asset class was force-created.
   */
  get asV1201(): {assetId: bigint, owner: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetsFrozenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Assets.Frozen')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some account `who` was frozen.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Assets.Frozen') === 'a07f176e176af32b351739ea886636ebf9f519994bc0b2ed23bd132216585dae'
  }

  /**
   * Some account `who` was frozen.
   */
  get asV1201(): {assetId: bigint, who: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetsIssuedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Assets.Issued')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some assets were issued.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Assets.Issued') === '00b4e83fd8a2b78206f9e4f83e5841b01b15461279b6952b593fddd97bfa57f8'
  }

  /**
   * Some assets were issued.
   */
  get asV1201(): {assetId: bigint, owner: Uint8Array, totalSupply: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetsMetadataClearedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Assets.MetadataCleared')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Metadata has been cleared for an asset.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Assets.MetadataCleared') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
  }

  /**
   * Metadata has been cleared for an asset.
   */
  get asV1201(): {assetId: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetsMetadataSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Assets.MetadataSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New metadata has been set for an asset.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Assets.MetadataSet') === '01ab9e31f40d9a1871985e1d4fa0e5b8324a517e9a5d954999b54e728d81b541'
  }

  /**
   * New metadata has been set for an asset.
   */
  get asV1201(): {assetId: bigint, name: Uint8Array, symbol: Uint8Array, decimals: number, isFrozen: boolean} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetsOwnerChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Assets.OwnerChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The owner changed.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Assets.OwnerChanged') === 'adc91c9d5229ea6a8721efe274c9a75894b73b14d20a2b4add201bee4d07c152'
  }

  /**
   * The owner changed.
   */
  get asV1201(): {assetId: bigint, owner: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetsTeamChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Assets.TeamChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The management team changed.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Assets.TeamChanged') === '6ab760c2b15b579ca9d6cd9a76b6905b2346743442fc92366cd8cecd684c80d4'
  }

  /**
   * The management team changed.
   */
  get asV1201(): {assetId: bigint, issuer: Uint8Array, admin: Uint8Array, freezer: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetsThawedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Assets.Thawed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some account `who` was thawed.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Assets.Thawed') === 'a07f176e176af32b351739ea886636ebf9f519994bc0b2ed23bd132216585dae'
  }

  /**
   * Some account `who` was thawed.
   */
  get asV1201(): {assetId: bigint, who: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetsTransferredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Assets.Transferred')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some assets were transferred.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Assets.Transferred') === 'f65815f0a2516ce398b9e72fe858b92dc308f7815d5ec2c9ca9344c57874f4c2'
  }

  /**
   * Some assets were transferred.
   */
  get asV1201(): {assetId: bigint, from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetsTransferredApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Assets.TransferredApproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An `amount` was transferred in its entirety from `owner` to `destination` by
   * the approved `delegate`.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Assets.TransferredApproved') === '1ef0deb189e1171c90e1ec5a6711de071f3a8d825f25baa3e436ea033402f916'
  }

  /**
   * An `amount` was transferred in its entirety from `owner` to `destination` by
   * the approved `delegate`.
   */
  get asV1201(): {assetId: bigint, owner: Uint8Array, delegate: Uint8Array, destination: Uint8Array, amount: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class AuthorFilterEligibleUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AuthorFilter.EligibleUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The amount of eligible authors for the filter to select has been changed.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('AuthorFilter.EligibleUpdated') === '3db3753dcff7ca8b313d91fce9f0cd33b8f6c491f0697e71d850b62d343b9faf'
  }

  /**
   * The amount of eligible authors for the filter to select has been changed.
   */
  get asV900(): number {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The amount of eligible authors for the filter to select has been changed.
   */
  get isV1502(): boolean {
    return this._chain.getEventHash('AuthorFilter.EligibleUpdated') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * The amount of eligible authors for the filter to select has been changed.
   */
  get asV1502(): number {
    assert(this.isV1502)
    return this._chain.decodeEvent(this.event)
  }
}

export class AuthorMappingAuthorDeRegisteredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AuthorMapping.AuthorDeRegistered')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An AuthorId has been de-registered, and its AccountId mapping removed.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('AuthorMapping.AuthorDeRegistered') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * An AuthorId has been de-registered, and its AccountId mapping removed.
   */
  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An NimbusId has been de-registered, and its AccountId mapping removed.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('AuthorMapping.AuthorDeRegistered') === 'c21728b5156f66dcb3edd0992c9a6c22c0541f5d479f1c54a53d7bfd2ff316b6'
  }

  /**
   * An NimbusId has been de-registered, and its AccountId mapping removed.
   */
  get asV1300(): {authorId: Uint8Array} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An NimbusId has been de-registered, and its AccountId mapping removed.
   */
  get isV1502(): boolean {
    return this._chain.getEventHash('AuthorMapping.AuthorDeRegistered') === '01600cd28f032b3e1af9b5a8b3c909c5e5750a79e8ea61ed75b5ecc086a58532'
  }

  /**
   * An NimbusId has been de-registered, and its AccountId mapping removed.
   */
  get asV1502(): {authorId: Uint8Array, accountId: Uint8Array, keys: Uint8Array} {
    assert(this.isV1502)
    return this._chain.decodeEvent(this.event)
  }
}

export class AuthorMappingAuthorRegisteredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AuthorMapping.AuthorRegistered')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An AuthorId has been registered and mapped to an AccountId.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('AuthorMapping.AuthorRegistered') === '1bbfbed2a18ed1015b346a5cabe70b9114a6caa07967174382e901a12e1ea17f'
  }

  /**
   * An AuthorId has been registered and mapped to an AccountId.
   */
  get asV900(): [Uint8Array, Uint8Array] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A NimbusId has been registered and mapped to an AccountId.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('AuthorMapping.AuthorRegistered') === '6ea502bdcab39103d72469a554a376cbee19381eba6efd4360b7ed2277a5d813'
  }

  /**
   * A NimbusId has been registered and mapped to an AccountId.
   */
  get asV1300(): {authorId: Uint8Array, accountId: Uint8Array} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A NimbusId has been registered and mapped to an AccountId.
   */
  get isV1502(): boolean {
    return this._chain.getEventHash('AuthorMapping.AuthorRegistered') === '01600cd28f032b3e1af9b5a8b3c909c5e5750a79e8ea61ed75b5ecc086a58532'
  }

  /**
   * A NimbusId has been registered and mapped to an AccountId.
   */
  get asV1502(): {authorId: Uint8Array, accountId: Uint8Array, keys: Uint8Array} {
    assert(this.isV1502)
    return this._chain.decodeEvent(this.event)
  }
}

export class AuthorMappingAuthorRotatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AuthorMapping.AuthorRotated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An AuthorId has been registered, replacing a previous registration and its mapping.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('AuthorMapping.AuthorRotated') === '1bbfbed2a18ed1015b346a5cabe70b9114a6caa07967174382e901a12e1ea17f'
  }

  /**
   * An AuthorId has been registered, replacing a previous registration and its mapping.
   */
  get asV900(): [Uint8Array, Uint8Array] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An NimbusId has been registered, replacing a previous registration and its mapping.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('AuthorMapping.AuthorRotated') === '6545792cf3bdba7fb6f036144d44f54245c1a9f3e73e31f263fcbedf4209c191'
  }

  /**
   * An NimbusId has been registered, replacing a previous registration and its mapping.
   */
  get asV1300(): {newAuthorId: Uint8Array, accountId: Uint8Array} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An NimbusId has been registered, replacing a previous registration and its mapping.
   */
  get isV1502(): boolean {
    return this._chain.getEventHash('AuthorMapping.AuthorRotated') === '64a8e828eea0863b4313acb9505a72918eca4533d5e170339fe5dd59decd4dda'
  }

  /**
   * An NimbusId has been registered, replacing a previous registration and its mapping.
   */
  get asV1502(): {newAuthorId: Uint8Array, accountId: Uint8Array, newKeys: Uint8Array} {
    assert(this.isV1502)
    return this._chain.decodeEvent(this.event)
  }
}

export class AuthorMappingDefunctAuthorBustedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AuthorMapping.DefunctAuthorBusted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An AuthorId has been forcibly deregistered after not being rotated or cleaned up.
   * The reporteing account has been rewarded accordingly.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('AuthorMapping.DefunctAuthorBusted') === '1bbfbed2a18ed1015b346a5cabe70b9114a6caa07967174382e901a12e1ea17f'
  }

  /**
   * An AuthorId has been forcibly deregistered after not being rotated or cleaned up.
   * The reporteing account has been rewarded accordingly.
   */
  get asV900(): [Uint8Array, Uint8Array] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An NimbusId has been forcibly deregistered after not being rotated or cleaned up.
   * The reporteing account has been rewarded accordingly.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('AuthorMapping.DefunctAuthorBusted') === '6ea502bdcab39103d72469a554a376cbee19381eba6efd4360b7ed2277a5d813'
  }

  /**
   * An NimbusId has been forcibly deregistered after not being rotated or cleaned up.
   * The reporteing account has been rewarded accordingly.
   */
  get asV1300(): {authorId: Uint8Array, accountId: Uint8Array} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class AuthorMappingKeysRegisteredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AuthorMapping.KeysRegistered')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A NimbusId has been registered and mapped to an AccountId.
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('AuthorMapping.KeysRegistered') === '1f5c9e2d430e68e8435c42235f4765a6e5ebe7c0adbcd8ee6adc3cb3ae430a5e'
  }

  /**
   * A NimbusId has been registered and mapped to an AccountId.
   */
  get asV1606(): {nimbusId: Uint8Array, accountId: Uint8Array, keys: Uint8Array} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class AuthorMappingKeysRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AuthorMapping.KeysRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An NimbusId has been de-registered, and its AccountId mapping removed.
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('AuthorMapping.KeysRemoved') === '1f5c9e2d430e68e8435c42235f4765a6e5ebe7c0adbcd8ee6adc3cb3ae430a5e'
  }

  /**
   * An NimbusId has been de-registered, and its AccountId mapping removed.
   */
  get asV1606(): {nimbusId: Uint8Array, accountId: Uint8Array, keys: Uint8Array} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class AuthorMappingKeysRotatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AuthorMapping.KeysRotated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An NimbusId has been registered, replacing a previous registration and its mapping.
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('AuthorMapping.KeysRotated') === 'f84365b6f133425576424d220ad7a7e94e2e3aaddd943ca2ef0eec04621fe2ee'
  }

  /**
   * An NimbusId has been registered, replacing a previous registration and its mapping.
   */
  get asV1606(): {newNimbusId: Uint8Array, accountId: Uint8Array, newKeys: Uint8Array} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesBalanceSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.BalanceSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A balance was set by root. \[who, free, reserved\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Balances.BalanceSet') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc'
  }

  /**
   * A balance was set by root. \[who, free, reserved\]
   */
  get asV900(): [Uint8Array, bigint, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A balance was set by root.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Balances.BalanceSet') === '3a56bc33dc87c1d425edfb16edf3f26eafed9ed9c0e8e6831221be938919d2bd'
  }

  /**
   * A balance was set by root.
   */
  get asV1201(): {who: Uint8Array, free: bigint, reserved: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesDepositEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Deposit')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Balances.Deposit') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
  }

  /**
   * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
   */
  get asV900(): [Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some amount was deposited (e.g. for transaction fees).
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Balances.Deposit') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
  }

  /**
   * Some amount was deposited (e.g. for transaction fees).
   */
  get asV1201(): {who: Uint8Array, amount: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesDustLostEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.DustLost')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account was removed whose balance was non-zero but below ExistentialDeposit,
   * resulting in an outright loss. \[account, balance\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Balances.DustLost') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
  }

  /**
   * An account was removed whose balance was non-zero but below ExistentialDeposit,
   * resulting in an outright loss. \[account, balance\]
   */
  get asV900(): [Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was removed whose balance was non-zero but below ExistentialDeposit,
   * resulting in an outright loss.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Balances.DustLost') === '73756cb75a05416db04c153fd4a78048e7662d48c0830e51e080bcd1ca6f540a'
  }

  /**
   * An account was removed whose balance was non-zero but below ExistentialDeposit,
   * resulting in an outright loss.
   */
  get asV1201(): {account: Uint8Array, amount: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesEndowedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Endowed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account was created with some free balance. \[account, free_balance\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Balances.Endowed') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
  }

  /**
   * An account was created with some free balance. \[account, free_balance\]
   */
  get asV900(): [Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was created with some free balance.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Balances.Endowed') === 'a773a5c0921f3b97243d311c28ce9bb596c8cc3eacae83e0b616a49c6784a35a'
  }

  /**
   * An account was created with some free balance.
   */
  get asV1201(): {account: Uint8Array, freeBalance: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesReserveRepatriatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.ReserveRepatriated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   * \[from, to, balance, destination_status\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Balances.ReserveRepatriated') === 'aed9aad67fe073fb38bb01741f1200b1f5f3aa52006f4669a1004d648cdb6e5d'
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   * \[from, to, balance, destination_status\]
   */
  get asV900(): [Uint8Array, Uint8Array, bigint, v900.BalanceStatus] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Balances.ReserveRepatriated') === 'daa0192df4c75cafc52e847a38b276d53a6330bf4083906b38c0d1eb5166d98a'
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   */
  get asV1201(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: v1201.BalanceStatus} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesReservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Reserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was reserved (moved from free to reserved). \[who, value\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Balances.Reserved') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
  }

  /**
   * Some balance was reserved (moved from free to reserved). \[who, value\]
   */
  get asV900(): [Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Balances.Reserved') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get asV1201(): {who: Uint8Array, amount: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesSlashedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Slashed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior). \[who,
   * amount_slashed\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Balances.Slashed') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior). \[who,
   * amount_slashed\]
   */
  get asV1001(): [Uint8Array, bigint] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior).
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Balances.Slashed') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior).
   */
  get asV1201(): {who: Uint8Array, amount: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesTransferEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Transfer')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transfer succeeded. \[from, to, value\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Balances.Transfer') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841'
  }

  /**
   * Transfer succeeded. \[from, to, value\]
   */
  get asV900(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transfer succeeded.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Balances.Transfer') === '23222c59f2992c12387568241620899d2d399ab9027595daca8255637f62ece3'
  }

  /**
   * Transfer succeeded.
   */
  get asV1201(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesUnreservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Unreserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was unreserved (moved from reserved to free). \[who, value\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Balances.Unreserved') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
  }

  /**
   * Some balance was unreserved (moved from reserved to free). \[who, value\]
   */
  get asV900(): [Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Balances.Unreserved') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get asV1201(): {who: Uint8Array, amount: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesWithdrawEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Withdraw')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees). \[who, value\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Balances.Withdraw') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees). \[who, value\]
   */
  get asV1001(): [Uint8Array, bigint] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees).
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Balances.Withdraw') === '43e3321e3408ebd2b7d4c70d42ffa076463495043e47ddb0fb1fbe3e105f5b2f'
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees).
   */
  get asV1201(): {who: Uint8Array, amount: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class BaseFeeBaseFeeOverflowEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'BaseFee.BaseFeeOverflow')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1201(): boolean {
    return this._chain.getEventHash('BaseFee.BaseFeeOverflow') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  get asV1201(): null {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class BaseFeeIsActiveEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'BaseFee.IsActive')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1201(): boolean {
    return this._chain.getEventHash('BaseFee.IsActive') === 'ab01a9c748aa3cbaea79085d7fc05c23416224e2cbe4d301feea3f8143c67da0'
  }

  get asV1201(): boolean {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class BaseFeeNewBaseFeePerGasEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'BaseFee.NewBaseFeePerGas')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1201(): boolean {
    return this._chain.getEventHash('BaseFee.NewBaseFeePerGas') === 'a70e61c66fb8f25a6ad950b70e508f5c9272e4478f62c480403898c0a5cae6de'
  }

  get asV1201(): bigint[] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class BaseFeeNewElasticityEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'BaseFee.NewElasticity')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1201(): boolean {
    return this._chain.getEventHash('BaseFee.NewElasticity') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  get asV1201(): number {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilCollectiveApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilCollective.Approved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was approved by the required threshold.
   * \[proposal_hash\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('CouncilCollective.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * A motion was approved by the required threshold.
   * \[proposal_hash\]
   */
  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('CouncilCollective.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV1201(): {proposalHash: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilCollectiveClosedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilCollective.Closed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   * \[proposal_hash, yes, no\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('CouncilCollective.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   * \[proposal_hash, yes, no\]
   */
  get asV900(): [Uint8Array, number, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('CouncilCollective.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV1201(): {proposalHash: Uint8Array, yes: number, no: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilCollectiveDisapprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilCollective.Disapproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was not approved by the required threshold.
   * \[proposal_hash\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('CouncilCollective.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * A motion was not approved by the required threshold.
   * \[proposal_hash\]
   */
  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('CouncilCollective.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV1201(): {proposalHash: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilCollectiveExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilCollective.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('CouncilCollective.Executed') === '019142f0bd31225b17a5d98473d6ee9928b1e71bb401e1e42248abdb9dca92c7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get asV900(): [Uint8Array, Result<null, v900.DispatchError>] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('CouncilCollective.Executed') === '5b848c4d2e38fbfb6752ba650f8662bd0df106f400d22ae305ed497d7574ee03'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1201(): {proposalHash: Uint8Array, result: Result<null, v1201.DispatchError>} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('CouncilCollective.Executed') === '3f97432326c1bc7a1d2b8f8e2b864f870aa8a7a926361a7af32c8e5c45ed9c5e'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1300(): {proposalHash: Uint8Array, result: Result<null, v1300.DispatchError>} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('CouncilCollective.Executed') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1401(): {proposalHash: Uint8Array, result: Result<null, v1401.DispatchError>} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('CouncilCollective.Executed') === '891fd2ad27e5f8bc799d45bb765ef77383902fd4e1cc4c6981cba99123803ac7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1606(): {proposalHash: Uint8Array, result: Result<null, v1606.DispatchError>} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilCollectiveMemberExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilCollective.MemberExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('CouncilCollective.MemberExecuted') === '019142f0bd31225b17a5d98473d6ee9928b1e71bb401e1e42248abdb9dca92c7'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get asV900(): [Uint8Array, Result<null, v900.DispatchError>] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('CouncilCollective.MemberExecuted') === '5b848c4d2e38fbfb6752ba650f8662bd0df106f400d22ae305ed497d7574ee03'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV1201(): {proposalHash: Uint8Array, result: Result<null, v1201.DispatchError>} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('CouncilCollective.MemberExecuted') === '3f97432326c1bc7a1d2b8f8e2b864f870aa8a7a926361a7af32c8e5c45ed9c5e'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV1300(): {proposalHash: Uint8Array, result: Result<null, v1300.DispatchError>} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('CouncilCollective.MemberExecuted') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV1401(): {proposalHash: Uint8Array, result: Result<null, v1401.DispatchError>} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('CouncilCollective.MemberExecuted') === '891fd2ad27e5f8bc799d45bb765ef77383902fd4e1cc4c6981cba99123803ac7'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV1606(): {proposalHash: Uint8Array, result: Result<null, v1606.DispatchError>} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilCollectiveProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilCollective.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   * \[account, proposal_index, proposal_hash, threshold\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('CouncilCollective.Proposed') === 'a613c04c45835d6c8d0d8935013395b895fbdea266e8525d81b3e176c482215c'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   * \[account, proposal_index, proposal_hash, threshold\]
   */
  get asV900(): [Uint8Array, number, Uint8Array, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('CouncilCollective.Proposed') === '2f562f77da96c6e9d914e5ea299d49ccdf6e5f2ac7298893761b08e64df38909'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV1201(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilCollectiveVotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilCollective.Voted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   * \[account, proposal_hash, voted, yes, no\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('CouncilCollective.Voted') === '6ebdb08adf34a07ba1fe77ab63c9bbeeb0196f65844713e59a373a8e8b2527f0'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   * \[account, proposal_hash, voted, yes, no\]
   */
  get asV900(): [Uint8Array, Uint8Array, boolean, number, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('CouncilCollective.Voted') === '21c6fc995cdece31f27f75fd29db36311e324efedc01dd968dcf754af1904de9'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV1201(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class CrowdloanRewardsInitialPaymentMadeEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CrowdloanRewards.InitialPaymentMade')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The initial payment of InitializationPayment % was paid
   */
  get isV900(): boolean {
    return this._chain.getEventHash('CrowdloanRewards.InitialPaymentMade') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
  }

  /**
   * The initial payment of InitializationPayment % was paid
   */
  get asV900(): [Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class CrowdloanRewardsInitializedAccountWithNotEnoughContributionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CrowdloanRewards.InitializedAccountWithNotEnoughContribution')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * When initializing the reward vec an already initialized account was found
   */
  get isV900(): boolean {
    return this._chain.getEventHash('CrowdloanRewards.InitializedAccountWithNotEnoughContribution') === '94c7acb99405cf689458dd9417563881691fd8afaaf1f33a2e47791cb24680fb'
  }

  /**
   * When initializing the reward vec an already initialized account was found
   */
  get asV900(): [Uint8Array, (Uint8Array | undefined), bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class CrowdloanRewardsInitializedAlreadyInitializedAccountEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CrowdloanRewards.InitializedAlreadyInitializedAccount')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * When initializing the reward vec an already initialized account was found
   */
  get isV900(): boolean {
    return this._chain.getEventHash('CrowdloanRewards.InitializedAlreadyInitializedAccount') === '94c7acb99405cf689458dd9417563881691fd8afaaf1f33a2e47791cb24680fb'
  }

  /**
   * When initializing the reward vec an already initialized account was found
   */
  get asV900(): [Uint8Array, (Uint8Array | undefined), bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class CrowdloanRewardsNativeIdentityAssociatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CrowdloanRewards.NativeIdentityAssociated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Someone has proven they made a contribution and associated a native identity with it.
   * Data is the relay account,  native account and the total amount of _rewards_ that will be paid
   */
  get isV900(): boolean {
    return this._chain.getEventHash('CrowdloanRewards.NativeIdentityAssociated') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
  }

  /**
   * Someone has proven they made a contribution and associated a native identity with it.
   * Data is the relay account,  native account and the total amount of _rewards_ that will be paid
   */
  get asV900(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class CrowdloanRewardsRewardAddressUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CrowdloanRewards.RewardAddressUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A contributor has updated the reward address.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('CrowdloanRewards.RewardAddressUpdated') === 'e425676e43dfa0f66531077a677904af26bdb7406850c1a937ed39ce997aebee'
  }

  /**
   * A contributor has updated the reward address.
   */
  get asV900(): [Uint8Array, Uint8Array] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class CrowdloanRewardsRewardsPaidEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CrowdloanRewards.RewardsPaid')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A contributor has claimed some rewards.
   * Data is the account getting paid and the amount of rewards paid.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('CrowdloanRewards.RewardsPaid') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
  }

  /**
   * A contributor has claimed some rewards.
   * Data is the account getting paid and the amount of rewards paid.
   */
  get asV900(): [Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class CumulusXcmExecutedDownwardEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CumulusXcm.ExecutedDownward')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === 'ce1ecc6cb7bde7a0e967ed0e6caff9002b8e335404bc1e51403dc21d44028613'
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get asV1201(): [Uint8Array, v1201.V2Outcome] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === '155c7cce0948b8cb240d1401bb772a72b24567aa52618e9a4aaa84271c380044'
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get asV1300(): [Uint8Array, v1300.V2Outcome] {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class CumulusXcmInvalidFormatEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CumulusXcm.InvalidFormat')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message is invalid XCM.
   * \[ id \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('CumulusXcm.InvalidFormat') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
  }

  /**
   * Downward message is invalid XCM.
   * \[ id \]
   */
  get asV1201(): Uint8Array {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class CumulusXcmUnsupportedVersionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CumulusXcm.UnsupportedVersion')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message is unsupported version of XCM.
   * \[ id \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('CumulusXcm.UnsupportedVersion') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
  }

  /**
   * Downward message is unsupported version of XCM.
   * \[ id \]
   */
  get asV1201(): Uint8Array {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyBlacklistedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Blacklisted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal \[hash\] has been blacklisted permanently.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.Blacklisted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * A proposal \[hash\] has been blacklisted permanently.
   */
  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal_hash has been blacklisted permanently.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.Blacklisted') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A proposal_hash has been blacklisted permanently.
   */
  get asV1201(): {proposalHash: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyCancelledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Cancelled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A referendum has been cancelled. \[ref_index\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.Cancelled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * A referendum has been cancelled. \[ref_index\]
   */
  get asV900(): number {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A referendum has been cancelled.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A referendum has been cancelled.
   */
  get asV1201(): {refIndex: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyDelegatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Delegated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account has delegated their vote to another account. \[who, target\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.Delegated') === 'e425676e43dfa0f66531077a677904af26bdb7406850c1a937ed39ce997aebee'
  }

  /**
   * An account has delegated their vote to another account. \[who, target\]
   */
  get asV900(): [Uint8Array, Uint8Array] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account has delegated their vote to another account.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.Delegated') === 'a5f0a4ae2379f580959d081ec916ca7592c4b768e59e32d64284c9f31a88a622'
  }

  /**
   * An account has delegated their vote to another account.
   */
  get asV1201(): {who: Uint8Array, target: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal has been enacted. \[ref_index, result\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '4569400573983e7dffe031a303e5028518f139390f47223a097cb35de3005258'
  }

  /**
   * A proposal has been enacted. \[ref_index, result\]
   */
  get asV900(): [number, Result<null, v900.DispatchError>] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '1f0fb32f2f0aaba231b69023c5858e85b8bfd660b5ce8c47d1b99b39602e4963'
  }

  /**
   * A proposal has been enacted.
   */
  get asV1201(): {refIndex: number, result: Result<null, v1201.DispatchError>} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === 'fe9cbb2e8fcebf406053419831a31120f211751f75230bfefe38454cc691c00a'
  }

  /**
   * A proposal has been enacted.
   */
  get asV1300(): {refIndex: number, result: Result<null, v1300.DispatchError>} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '98c3caaef1b84143deea16c761096200c5e0e631c6a3776ed012edc9788cf6e2'
  }

  /**
   * A proposal has been enacted.
   */
  get asV1401(): {refIndex: number, result: Result<null, v1401.DispatchError>} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '2abe2e7ca2af8b119eb4f3a1f669843943049e3f4e2f613fc3b077115902ca2b'
  }

  /**
   * A proposal has been enacted.
   */
  get asV1606(): {refIndex: number, result: Result<null, v1606.DispatchError>} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyExternalTabledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.ExternalTabled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An external proposal has been tabled.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.ExternalTabled') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * An external proposal has been tabled.
   */
  get asV900(): null {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyNotPassedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.NotPassed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal has been rejected by referendum. \[ref_index\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.NotPassed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * A proposal has been rejected by referendum. \[ref_index\]
   */
  get asV900(): number {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get asV1201(): {refIndex: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPassedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Passed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal has been approved by referendum. \[ref_index\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.Passed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * A proposal has been approved by referendum. \[ref_index\]
   */
  get asV900(): number {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been approved by referendum.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been approved by referendum.
   */
  get asV1201(): {refIndex: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageInvalidEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageInvalid')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   * \[proposal_hash, ref_index\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.PreimageInvalid') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   * \[proposal_hash, ref_index\]
   */
  get asV900(): [Uint8Array, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get asV1201(): {proposalHash: Uint8Array, refIndex: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageMissingEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageMissing')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   * \[proposal_hash, ref_index\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.PreimageMissing') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   * \[proposal_hash, ref_index\]
   */
  get asV900(): [Uint8Array, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get asV1201(): {proposalHash: Uint8Array, refIndex: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageNotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageNoted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.PreimageNoted') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
  }

  /**
   * A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get asV900(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.PreimageNoted') === 'd47be2e4a05481fd42e21a0e80292e7b68789de4198c4087194b44ca5b857093'
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get asV1201(): {proposalHash: Uint8Array, who: Uint8Array, deposit: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageReapedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageReaped')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   * \[proposal_hash, provider, deposit, reaper\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.PreimageReaped') === 'c1f551cd38e3880870dfafd43056cf3e144a85c870b0b513c2a042c7e4634bf7'
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   * \[proposal_hash, provider, deposit, reaper\]
   */
  get asV900(): [Uint8Array, Uint8Array, bigint, Uint8Array] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.PreimageReaped') === '79380123f072831563a9a29ef7dd7d312f309e2ba7fb0a62b701bc6410ad30b7'
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get asV1201(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint, reaper: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageUsedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageUsed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   * \[proposal_hash, provider, deposit\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.PreimageUsed') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   * \[proposal_hash, provider, deposit\]
   */
  get asV900(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.PreimageUsed') === '84e66e8024f25586e9c223173463c55e83f2ff96130417e7f93374803337e024'
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get asV1201(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.Proposed') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   * A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get asV900(): [number, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion has been proposed by a public account.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
  }

  /**
   * A motion has been proposed by a public account.
   */
  get asV1201(): {proposalIndex: number, deposit: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracySecondedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Seconded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account has secconded a proposal
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Democracy.Seconded') === '80357ff79362e3a77b7be6f1a77d71ada85a736a87350d42e118f8db8a4e3368'
  }

  /**
   * An account has secconded a proposal
   */
  get asV1001(): [Uint8Array, number] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account has secconded a proposal
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.Seconded') === '64da6ce35c02cb0c27b0e16f55fa6a5bafc454011188894a92a86fae6c04c2aa'
  }

  /**
   * An account has secconded a proposal
   */
  get asV1201(): {who: Uint8Array, proposalIndex: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account has secconded a proposal
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Democracy.Seconded') === 'd5bfb0eab019443031d55a3928d16d36f1028c536942730854c88b38b6f54e9e'
  }

  /**
   * An account has secconded a proposal
   */
  get asV1300(): {seconder: Uint8Array, propIndex: number} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyStartedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Started')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A referendum has begun. \[ref_index, threshold\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.Started') === '31dcae10175d30392db6fc8a872e963baae4bcf3ee28dfd38b1653a0751c031f'
  }

  /**
   * A referendum has begun. \[ref_index, threshold\]
   */
  get asV900(): [number, v900.VoteThreshold] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A referendum has begun.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
  }

  /**
   * A referendum has begun.
   */
  get asV1201(): {refIndex: number, threshold: v1201.VoteThreshold} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyTabledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Tabled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A public proposal has been tabled for referendum vote. \[proposal_index, deposit,
   * depositors\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.Tabled') === 'a02fb718124f3ad2168551f865aebb4f81eb1cfe14c9fb743a86ef04f294e29b'
  }

  /**
   * A public proposal has been tabled for referendum vote. \[proposal_index, deposit,
   * depositors\]
   */
  get asV900(): [number, bigint, Uint8Array[]] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.Tabled') === '2b043f58d8d5c231c7840a8ddeda0d0c9db1b6f9985329aaaac42d4661be939e'
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get asV1201(): {proposalIndex: number, deposit: bigint, depositors: Uint8Array[]} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyUndelegatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Undelegated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An \[account\] has cancelled a previous delegation operation.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.Undelegated') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
  }

  /**
   * An \[account\] has cancelled a previous delegation operation.
   */
  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account has cancelled a previous delegation operation.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.Undelegated') === '041e3c99c7373645533b0a38437f03393c46e1c811b17689bc2c51c0b6784c09'
  }

  /**
   * An account has cancelled a previous delegation operation.
   */
  get asV1201(): {account: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyVetoedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Vetoed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An external proposal has been vetoed. \[who, proposal_hash, until\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.Vetoed') === '95cf9b87b15132da37c09ac81915a5ac479053ca6b2dd58b232e1f0275d86691'
  }

  /**
   * An external proposal has been vetoed. \[who, proposal_hash, until\]
   */
  get asV900(): [Uint8Array, Uint8Array, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An external proposal has been vetoed.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.Vetoed') === '004227946b48c50c2c99871feca5b057cf68e183b57a668645b68e13f7977cf6'
  }

  /**
   * An external proposal has been vetoed.
   */
  get asV1201(): {who: Uint8Array, proposalHash: Uint8Array, until: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyVotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Voted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account has voted in a referendum
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Democracy.Voted') === '604da654023263e7aea05372e1eb33e38c4a6f4e84e160804c7879f6e1564022'
  }

  /**
   * An account has voted in a referendum
   */
  get asV1001(): [Uint8Array, number, v1001.AccountVote] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account has voted in a referendum
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.Voted') === 'f368480dd5ebfa5a0e2f0613bc234e6c02a38fc86dfc2ece938dee4f5a0483d1'
  }

  /**
   * An account has voted in a referendum
   */
  get asV1201(): {who: Uint8Array, refIndex: number, vote: v1201.AccountVote} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account has voted in a referendum
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Democracy.Voted') === '0eaf760dcfa41dbcca324addedbf718eb01fd2ef951a16ed7fe4bb420e2ebf8a'
  }

  /**
   * An account has voted in a referendum
   */
  get asV1300(): {voter: Uint8Array, refIndex: number, vote: v1300.AccountVote} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueExecutedDownwardEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.ExecutedDownward')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('DmpQueue.ExecutedDownward') === 'f660a1eb74571095e7cab99beb471c0ab4687ebb9afcd9f8734fc316dd9f477d'
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get asV1201(): [Uint8Array, v1201.V2Outcome] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('DmpQueue.ExecutedDownward') === '286143d78cae88e1dcd7f8fca6da4dcb49ebc3ba61ad473eec7ff13812f3fd56'
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get asV1300(): [Uint8Array, v1300.V2Outcome] {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message executed with the given outcome.
   */
  get isV1701(): boolean {
    return this._chain.getEventHash('DmpQueue.ExecutedDownward') === '9b6c90aca74067a591eda76a227e61ce66cd6597483f828a039aba267c0d21a9'
  }

  /**
   * Downward message executed with the given outcome.
   */
  get asV1701(): {messageId: Uint8Array, outcome: v1701.V2Outcome} {
    assert(this.isV1701)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueInvalidFormatEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.InvalidFormat')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message is invalid XCM.
   * \[ id \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('DmpQueue.InvalidFormat') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * Downward message is invalid XCM.
   * \[ id \]
   */
  get asV1201(): Uint8Array {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message is invalid XCM.
   */
  get isV1701(): boolean {
    return this._chain.getEventHash('DmpQueue.InvalidFormat') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
  }

  /**
   * Downward message is invalid XCM.
   */
  get asV1701(): {messageId: Uint8Array} {
    assert(this.isV1701)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueOverweightEnqueuedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.OverweightEnqueued')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message is overweight and was placed in the overweight queue.
   * \[ id, index, required \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
  }

  /**
   * Downward message is overweight and was placed in the overweight queue.
   * \[ id, index, required \]
   */
  get asV1201(): [Uint8Array, bigint, bigint] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message is overweight and was placed in the overweight queue.
   */
  get isV1701(): boolean {
    return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === 'ffa192c80e10233d155345fc4cc34bc357a97a6465c78ccf6a14b02ee5b8c21f'
  }

  /**
   * Downward message is overweight and was placed in the overweight queue.
   */
  get asV1701(): {messageId: Uint8Array, overweightIndex: bigint, requiredWeight: bigint} {
    assert(this.isV1701)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueOverweightServicedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.OverweightServiced')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message from the overweight queue was executed.
   * \[ index, used \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('DmpQueue.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
  }

  /**
   * Downward message from the overweight queue was executed.
   * \[ index, used \]
   */
  get asV1201(): [bigint, bigint] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message from the overweight queue was executed.
   */
  get isV1701(): boolean {
    return this._chain.getEventHash('DmpQueue.OverweightServiced') === '7deec7d9ba4a81157571b321671d50b393890bd802f27d9b3ba2609ffa497713'
  }

  /**
   * Downward message from the overweight queue was executed.
   */
  get asV1701(): {overweightIndex: bigint, weightUsed: bigint} {
    assert(this.isV1701)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueUnsupportedVersionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.UnsupportedVersion')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message is unsupported version of XCM.
   * \[ id \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('DmpQueue.UnsupportedVersion') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * Downward message is unsupported version of XCM.
   * \[ id \]
   */
  get asV1201(): Uint8Array {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message is unsupported version of XCM.
   */
  get isV1701(): boolean {
    return this._chain.getEventHash('DmpQueue.UnsupportedVersion') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
  }

  /**
   * Downward message is unsupported version of XCM.
   */
  get asV1701(): {messageId: Uint8Array} {
    assert(this.isV1701)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueWeightExhaustedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.WeightExhausted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The weight limit for handling downward messages was reached.
   * \[ id, remaining, required \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('DmpQueue.WeightExhausted') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
  }

  /**
   * The weight limit for handling downward messages was reached.
   * \[ id, remaining, required \]
   */
  get asV1201(): [Uint8Array, bigint, bigint] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The weight limit for handling downward messages was reached.
   */
  get isV1701(): boolean {
    return this._chain.getEventHash('DmpQueue.WeightExhausted') === 'dcf12831e69a1760af0584247b404096aa4ce1c77c7b3caae95d831bf4afa0b2'
  }

  /**
   * The weight limit for handling downward messages was reached.
   */
  get asV1701(): {messageId: Uint8Array, remainingWeight: bigint, requiredWeight: bigint} {
    assert(this.isV1701)
    return this._chain.decodeEvent(this.event)
  }
}

export class EvmBalanceDepositEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'EVM.BalanceDeposit')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A deposit has been made at a given address. \[sender, address, value\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('EVM.BalanceDeposit') === '8c49d03e6960e6bbb8036b477326e2ced5165533f87a642816b1dd76b4f1cbea'
  }

  /**
   * A deposit has been made at a given address. \[sender, address, value\]
   */
  get asV900(): [Uint8Array, Uint8Array, bigint[]] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class EvmBalanceWithdrawEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'EVM.BalanceWithdraw')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A withdrawal has been made from a given address. \[sender, address, value\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('EVM.BalanceWithdraw') === '8c49d03e6960e6bbb8036b477326e2ced5165533f87a642816b1dd76b4f1cbea'
  }

  /**
   * A withdrawal has been made from a given address. \[sender, address, value\]
   */
  get asV900(): [Uint8Array, Uint8Array, bigint[]] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class EvmCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'EVM.Created')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A contract has been created at given \[address\].
   */
  get isV900(): boolean {
    return this._chain.getEventHash('EVM.Created') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
  }

  /**
   * A contract has been created at given \[address\].
   */
  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class EvmCreatedFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'EVM.CreatedFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A \[contract\] was attempted to be created, but the execution failed.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('EVM.CreatedFailed') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
  }

  /**
   * A \[contract\] was attempted to be created, but the execution failed.
   */
  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class EvmExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'EVM.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A \[contract\] has been executed successfully with states applied.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('EVM.Executed') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
  }

  /**
   * A \[contract\] has been executed successfully with states applied.
   */
  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class EvmExecutedFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'EVM.ExecutedFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A \[contract\] has been executed with errors. States are reverted with only gas fees applied.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('EVM.ExecutedFailed') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
  }

  /**
   * A \[contract\] has been executed with errors. States are reverted with only gas fees applied.
   */
  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class EvmLogEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'EVM.Log')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Ethereum events from contracts.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('EVM.Log') === '9d15dce6e6d818eeb73a868dd136a22667fbfdd27463a338b39cabae62aa4a12'
  }

  /**
   * Ethereum events from contracts.
   */
  get asV900(): v900.Log {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class EthereumExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Ethereum.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Ethereum.Executed') === '0c7eb5ef81fb6e87c05b96ed25f52c62fffc067198343642f01289fbb0011fce'
  }

  /**
   * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
   */
  get asV900(): [Uint8Array, Uint8Array, Uint8Array, v900.ExitReason] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Ethereum.Executed') === '4548a1e2cc89d3c4c1d89f3020a6fb505032fdfd5236d5749c897815fb7db5de'
  }

  /**
   * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
   */
  get asV1201(): [Uint8Array, Uint8Array, Uint8Array, v1201.ExitReason] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('Ethereum.Executed') === '19a41316cbc97760af789cb1da772172d6a9f09521ee0e5e8f18125c1db318df'
  }

  /**
   * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
   */
  get asV1401(): [Uint8Array, Uint8Array, Uint8Array, v1401.ExitReason] {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
   */
  get isV1701(): boolean {
    return this._chain.getEventHash('Ethereum.Executed') === '42c632fb85f0ab54f0811a41be276501476d6d3e1e0169c6a6db6afdd63e7893'
  }

  /**
   * An ethereum transaction was successfully executed. [from, to/contract_address, transaction_hash, exit_reason]
   */
  get asV1701(): [Uint8Array, Uint8Array, Uint8Array, v1701.ExitReason] {
    assert(this.isV1701)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityIdentityClearedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.IdentityCleared')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A name was cleared, and the given balance returned. \[who, deposit\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Identity.IdentityCleared') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
  }

  /**
   * A name was cleared, and the given balance returned. \[who, deposit\]
   */
  get asV900(): [Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A name was cleared, and the given balance returned.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Identity.IdentityCleared') === '5920a63f526b6f30a0a0fe27aabc69ce85f483879a675014dc1525735f2dd71d'
  }

  /**
   * A name was cleared, and the given balance returned.
   */
  get asV1201(): {who: Uint8Array, deposit: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityIdentityKilledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.IdentityKilled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A name was removed and the given balance slashed. \[who, deposit\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Identity.IdentityKilled') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
  }

  /**
   * A name was removed and the given balance slashed. \[who, deposit\]
   */
  get asV900(): [Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A name was removed and the given balance slashed.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Identity.IdentityKilled') === '5920a63f526b6f30a0a0fe27aabc69ce85f483879a675014dc1525735f2dd71d'
  }

  /**
   * A name was removed and the given balance slashed.
   */
  get asV1201(): {who: Uint8Array, deposit: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityIdentitySetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.IdentitySet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A name was set or reset (which will remove all judgements). \[who\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Identity.IdentitySet') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
  }

  /**
   * A name was set or reset (which will remove all judgements). \[who\]
   */
  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A name was set or reset (which will remove all judgements).
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Identity.IdentitySet') === 'e92c9f723dde51134e2f444b9c6f3d649ad16574a792290c80e904dda6240391'
  }

  /**
   * A name was set or reset (which will remove all judgements).
   */
  get asV1201(): {who: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityJudgementGivenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.JudgementGiven')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A judgement was given by a registrar. \[target, registrar_index\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Identity.JudgementGiven') === '80357ff79362e3a77b7be6f1a77d71ada85a736a87350d42e118f8db8a4e3368'
  }

  /**
   * A judgement was given by a registrar. \[target, registrar_index\]
   */
  get asV900(): [Uint8Array, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A judgement was given by a registrar.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Identity.JudgementGiven') === '6a000c960469f8cb2927d0911ab50570831bdef144ff0a8fc0e6ca5e5002bcbd'
  }

  /**
   * A judgement was given by a registrar.
   */
  get asV1201(): {target: Uint8Array, registrarIndex: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityJudgementRequestedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.JudgementRequested')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A judgement was asked from a registrar. \[who, registrar_index\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Identity.JudgementRequested') === '80357ff79362e3a77b7be6f1a77d71ada85a736a87350d42e118f8db8a4e3368'
  }

  /**
   * A judgement was asked from a registrar. \[who, registrar_index\]
   */
  get asV900(): [Uint8Array, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A judgement was asked from a registrar.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Identity.JudgementRequested') === 'f1c377566b6650dc61a08ef81515602cdaf9268fa9cca46424c6c54e45824777'
  }

  /**
   * A judgement was asked from a registrar.
   */
  get asV1201(): {who: Uint8Array, registrarIndex: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityJudgementUnrequestedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.JudgementUnrequested')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A judgement request was retracted. \[who, registrar_index\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Identity.JudgementUnrequested') === '80357ff79362e3a77b7be6f1a77d71ada85a736a87350d42e118f8db8a4e3368'
  }

  /**
   * A judgement request was retracted. \[who, registrar_index\]
   */
  get asV900(): [Uint8Array, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A judgement request was retracted.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Identity.JudgementUnrequested') === 'f1c377566b6650dc61a08ef81515602cdaf9268fa9cca46424c6c54e45824777'
  }

  /**
   * A judgement request was retracted.
   */
  get asV1201(): {who: Uint8Array, registrarIndex: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityRegistrarAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.RegistrarAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A registrar was added. \[registrar_index\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Identity.RegistrarAdded') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * A registrar was added. \[registrar_index\]
   */
  get asV900(): number {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A registrar was added.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Identity.RegistrarAdded') === 'c7c8fe6ce04ac3d49accb0e86098814baf3baab267afb645140023a3c5c84c24'
  }

  /**
   * A registrar was added.
   */
  get asV1201(): {registrarIndex: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentitySubIdentityAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.SubIdentityAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Identity.SubIdentityAdded') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841'
  }

  /**
   * A sub-identity was added to an identity and the deposit paid. \[sub, main, deposit\]
   */
  get asV900(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A sub-identity was added to an identity and the deposit paid.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Identity.SubIdentityAdded') === 'da7dc1cffb3950148c7a62503aabcc9be874bdb4d3f249e696af6a9de646ad91'
  }

  /**
   * A sub-identity was added to an identity and the deposit paid.
   */
  get asV1201(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentitySubIdentityRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.SubIdentityRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A sub-identity was removed from an identity and the deposit freed.
   * \[sub, main, deposit\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Identity.SubIdentityRemoved') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841'
  }

  /**
   * A sub-identity was removed from an identity and the deposit freed.
   * \[sub, main, deposit\]
   */
  get asV900(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A sub-identity was removed from an identity and the deposit freed.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Identity.SubIdentityRemoved') === 'da7dc1cffb3950148c7a62503aabcc9be874bdb4d3f249e696af6a9de646ad91'
  }

  /**
   * A sub-identity was removed from an identity and the deposit freed.
   */
  get asV1201(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentitySubIdentityRevokedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.SubIdentityRevoked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A sub-identity was cleared, and the given deposit repatriated from the
   * main identity account to the sub-identity account. \[sub, main, deposit\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Identity.SubIdentityRevoked') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841'
  }

  /**
   * A sub-identity was cleared, and the given deposit repatriated from the
   * main identity account to the sub-identity account. \[sub, main, deposit\]
   */
  get asV900(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A sub-identity was cleared, and the given deposit repatriated from the
   * main identity account to the sub-identity account.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Identity.SubIdentityRevoked') === 'da7dc1cffb3950148c7a62503aabcc9be874bdb4d3f249e696af6a9de646ad91'
  }

  /**
   * A sub-identity was cleared, and the given deposit repatriated from the
   * main identity account to the sub-identity account.
   */
  get asV1201(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class LocalAssetsApprovalCancelledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LocalAssets.ApprovalCancelled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An approval for account `delegate` was cancelled by `owner`.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('LocalAssets.ApprovalCancelled') === '1c909afc9b78187ab7dd247b4eb309bd383560ed4eb9a05fba24117453936d6f'
  }

  /**
   * An approval for account `delegate` was cancelled by `owner`.
   */
  get asV1401(): {assetId: bigint, owner: Uint8Array, delegate: Uint8Array} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class LocalAssetsApprovedTransferEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LocalAssets.ApprovedTransfer')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * (Additional) funds have been approved for transfer to a destination account.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('LocalAssets.ApprovedTransfer') === '6596d037926575491f74014c174637b2396303408b01a12cd3fed65a43155001'
  }

  /**
   * (Additional) funds have been approved for transfer to a destination account.
   */
  get asV1401(): {assetId: bigint, source: Uint8Array, delegate: Uint8Array, amount: bigint} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class LocalAssetsAssetFrozenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LocalAssets.AssetFrozen')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some asset `asset_id` was frozen.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('LocalAssets.AssetFrozen') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
  }

  /**
   * Some asset `asset_id` was frozen.
   */
  get asV1401(): {assetId: bigint} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class LocalAssetsAssetStatusChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LocalAssets.AssetStatusChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An asset has had its attributes changed by the `Force` origin.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('LocalAssets.AssetStatusChanged') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
  }

  /**
   * An asset has had its attributes changed by the `Force` origin.
   */
  get asV1401(): {assetId: bigint} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class LocalAssetsAssetThawedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LocalAssets.AssetThawed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some asset `asset_id` was thawed.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('LocalAssets.AssetThawed') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
  }

  /**
   * Some asset `asset_id` was thawed.
   */
  get asV1401(): {assetId: bigint} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class LocalAssetsBurnedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LocalAssets.Burned')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some assets were destroyed.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('LocalAssets.Burned') === '7b313023dcadc0790714779ac69e85195d0b94fbfc5c5b1c65234ca592e0d3f7'
  }

  /**
   * Some assets were destroyed.
   */
  get asV1401(): {assetId: bigint, owner: Uint8Array, balance: bigint} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class LocalAssetsCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LocalAssets.Created')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some asset class was created.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('LocalAssets.Created') === 'fd62e88c9ea5dc8842e0823fab1341577dbecd6032441c5b3e25acb8e12bc858'
  }

  /**
   * Some asset class was created.
   */
  get asV1401(): {assetId: bigint, creator: Uint8Array, owner: Uint8Array} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class LocalAssetsDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LocalAssets.Destroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An asset class was destroyed.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('LocalAssets.Destroyed') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
  }

  /**
   * An asset class was destroyed.
   */
  get asV1401(): {assetId: bigint} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class LocalAssetsForceCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LocalAssets.ForceCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some asset class was force-created.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('LocalAssets.ForceCreated') === 'adc91c9d5229ea6a8721efe274c9a75894b73b14d20a2b4add201bee4d07c152'
  }

  /**
   * Some asset class was force-created.
   */
  get asV1401(): {assetId: bigint, owner: Uint8Array} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class LocalAssetsFrozenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LocalAssets.Frozen')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some account `who` was frozen.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('LocalAssets.Frozen') === 'a07f176e176af32b351739ea886636ebf9f519994bc0b2ed23bd132216585dae'
  }

  /**
   * Some account `who` was frozen.
   */
  get asV1401(): {assetId: bigint, who: Uint8Array} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class LocalAssetsIssuedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LocalAssets.Issued')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some assets were issued.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('LocalAssets.Issued') === '00b4e83fd8a2b78206f9e4f83e5841b01b15461279b6952b593fddd97bfa57f8'
  }

  /**
   * Some assets were issued.
   */
  get asV1401(): {assetId: bigint, owner: Uint8Array, totalSupply: bigint} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class LocalAssetsMetadataClearedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LocalAssets.MetadataCleared')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Metadata has been cleared for an asset.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('LocalAssets.MetadataCleared') === '6828465f4945ca3643a9c1df872454dc32b979f43e4cf2413d78116734a92c6a'
  }

  /**
   * Metadata has been cleared for an asset.
   */
  get asV1401(): {assetId: bigint} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class LocalAssetsMetadataSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LocalAssets.MetadataSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New metadata has been set for an asset.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('LocalAssets.MetadataSet') === '01ab9e31f40d9a1871985e1d4fa0e5b8324a517e9a5d954999b54e728d81b541'
  }

  /**
   * New metadata has been set for an asset.
   */
  get asV1401(): {assetId: bigint, name: Uint8Array, symbol: Uint8Array, decimals: number, isFrozen: boolean} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class LocalAssetsOwnerChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LocalAssets.OwnerChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The owner changed.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('LocalAssets.OwnerChanged') === 'adc91c9d5229ea6a8721efe274c9a75894b73b14d20a2b4add201bee4d07c152'
  }

  /**
   * The owner changed.
   */
  get asV1401(): {assetId: bigint, owner: Uint8Array} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class LocalAssetsTeamChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LocalAssets.TeamChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The management team changed.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('LocalAssets.TeamChanged') === '6ab760c2b15b579ca9d6cd9a76b6905b2346743442fc92366cd8cecd684c80d4'
  }

  /**
   * The management team changed.
   */
  get asV1401(): {assetId: bigint, issuer: Uint8Array, admin: Uint8Array, freezer: Uint8Array} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class LocalAssetsThawedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LocalAssets.Thawed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some account `who` was thawed.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('LocalAssets.Thawed') === 'a07f176e176af32b351739ea886636ebf9f519994bc0b2ed23bd132216585dae'
  }

  /**
   * Some account `who` was thawed.
   */
  get asV1401(): {assetId: bigint, who: Uint8Array} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class LocalAssetsTransferredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LocalAssets.Transferred')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some assets were transferred.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('LocalAssets.Transferred') === 'f65815f0a2516ce398b9e72fe858b92dc308f7815d5ec2c9ca9344c57874f4c2'
  }

  /**
   * Some assets were transferred.
   */
  get asV1401(): {assetId: bigint, from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class LocalAssetsTransferredApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LocalAssets.TransferredApproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An `amount` was transferred in its entirety from `owner` to `destination` by
   * the approved `delegate`.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('LocalAssets.TransferredApproved') === '1ef0deb189e1171c90e1ec5a6711de071f3a8d825f25baa3e436ea033402f916'
  }

  /**
   * An `amount` was transferred in its entirety from `owner` to `destination` by
   * the approved `delegate`.
   */
  get asV1401(): {assetId: bigint, owner: Uint8Array, delegate: Uint8Array, destination: Uint8Array, amount: bigint} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class MaintenanceModeEnteredMaintenanceModeEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MaintenanceMode.EnteredMaintenanceMode')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The chain was put into Maintenance Mode
   */
  get isV900(): boolean {
    return this._chain.getEventHash('MaintenanceMode.EnteredMaintenanceMode') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * The chain was put into Maintenance Mode
   */
  get asV900(): null {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class MaintenanceModeFailedToResumeIdleXcmExecutionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MaintenanceMode.FailedToResumeIdleXcmExecution')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The call to resume on_idle XCM execution failed with inner error
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('MaintenanceMode.FailedToResumeIdleXcmExecution') === 'f0795f0edc834fef1d1d136e23a9bc25ad726ccd4fb74b76f24e2a19c5ba7195'
  }

  /**
   * The call to resume on_idle XCM execution failed with inner error
   */
  get asV1401(): {error: v1401.DispatchError} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The call to resume on_idle XCM execution failed with inner error
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('MaintenanceMode.FailedToResumeIdleXcmExecution') === '59e964849fe0837c16b04e3c81782ce0ee22b9efe3d6a8d43d6ea61e9b25b998'
  }

  /**
   * The call to resume on_idle XCM execution failed with inner error
   */
  get asV1606(): {error: v1606.DispatchError} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class MaintenanceModeFailedToSuspendIdleXcmExecutionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MaintenanceMode.FailedToSuspendIdleXcmExecution')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The call to suspend on_idle XCM execution failed with inner error
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('MaintenanceMode.FailedToSuspendIdleXcmExecution') === 'f0795f0edc834fef1d1d136e23a9bc25ad726ccd4fb74b76f24e2a19c5ba7195'
  }

  /**
   * The call to suspend on_idle XCM execution failed with inner error
   */
  get asV1401(): {error: v1401.DispatchError} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The call to suspend on_idle XCM execution failed with inner error
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('MaintenanceMode.FailedToSuspendIdleXcmExecution') === '59e964849fe0837c16b04e3c81782ce0ee22b9efe3d6a8d43d6ea61e9b25b998'
  }

  /**
   * The call to suspend on_idle XCM execution failed with inner error
   */
  get asV1606(): {error: v1606.DispatchError} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class MaintenanceModeNormalOperationResumedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MaintenanceMode.NormalOperationResumed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The chain returned to its normal operating state
   */
  get isV900(): boolean {
    return this._chain.getEventHash('MaintenanceMode.NormalOperationResumed') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * The chain returned to its normal operating state
   */
  get asV900(): null {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class MigrationsMigrationCompletedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Migrations.MigrationCompleted')
    this._chain = ctx._chain
    this.event = event
  }

  get isV900(): boolean {
    return this._chain.getEventHash('Migrations.MigrationCompleted') === '4039bd26ff27fd7dffafcf296bc10d47d815c50428350d19bfd152c9a19aa3c6'
  }

  get asV900(): [Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Migration completed
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Migrations.MigrationCompleted') === 'ef45715d261b0bfd4a1e8d7a80328030c5b84f12fd2bffb141338b4ff07bc082'
  }

  /**
   * Migration completed
   */
  get asV1300(): {migrationName: Uint8Array, consumedWeight: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class MigrationsMigrationStartedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Migrations.MigrationStarted')
    this._chain = ctx._chain
    this.event = event
  }

  get isV900(): boolean {
    return this._chain.getEventHash('Migrations.MigrationStarted') === '2f3c83e89fe8252155817328a8c403c0bd3d9afea4de66b5b6e2ad04b3011a7a'
  }

  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Migration started
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Migrations.MigrationStarted') === 'a45c5d0a5bb09b2f0b82d4a8505763dd91f2c1b63d2be62ce1040948e6df4f64'
  }

  /**
   * Migration started
   */
  get asV1300(): {migrationName: Uint8Array} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class MigrationsRuntimeUpgradeCompletedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Migrations.RuntimeUpgradeCompleted')
    this._chain = ctx._chain
    this.event = event
  }

  get isV900(): boolean {
    return this._chain.getEventHash('Migrations.RuntimeUpgradeCompleted') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
  }

  get asV900(): bigint {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Runtime upgrade completed
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Migrations.RuntimeUpgradeCompleted') === '16fb16c3908da583d22fe511e4d8363e8bb3515a5198e5ceff8750a50e22f5d7'
  }

  /**
   * Runtime upgrade completed
   */
  get asV1300(): {weight: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class MigrationsRuntimeUpgradeStartedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Migrations.RuntimeUpgradeStarted')
    this._chain = ctx._chain
    this.event = event
  }

  get isV900(): boolean {
    return this._chain.getEventHash('Migrations.RuntimeUpgradeStarted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  get asV900(): null {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class MoonbeamOrbitersOrbiterJoinCollatorPoolEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MoonbeamOrbiters.OrbiterJoinCollatorPool')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An orbiter join a collator pool
   */
  get isV1502(): boolean {
    return this._chain.getEventHash('MoonbeamOrbiters.OrbiterJoinCollatorPool') === '1e1f96292f928d45686ddff0ee6209e712660e7447c71a14f41faf3bb1ac4442'
  }

  /**
   * An orbiter join a collator pool
   */
  get asV1502(): {collator: Uint8Array, orbiter: Uint8Array} {
    assert(this.isV1502)
    return this._chain.decodeEvent(this.event)
  }
}

export class MoonbeamOrbitersOrbiterLeaveCollatorPoolEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MoonbeamOrbiters.OrbiterLeaveCollatorPool')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An orbiter leave a collator pool
   */
  get isV1502(): boolean {
    return this._chain.getEventHash('MoonbeamOrbiters.OrbiterLeaveCollatorPool') === '1e1f96292f928d45686ddff0ee6209e712660e7447c71a14f41faf3bb1ac4442'
  }

  /**
   * An orbiter leave a collator pool
   */
  get asV1502(): {collator: Uint8Array, orbiter: Uint8Array} {
    assert(this.isV1502)
    return this._chain.decodeEvent(this.event)
  }
}

export class MoonbeamOrbitersOrbiterRegisteredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MoonbeamOrbiters.OrbiterRegistered')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An orbiter has registered
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('MoonbeamOrbiters.OrbiterRegistered') === 'dc9aa434c49e387a6a1722f8eb8e62ce69a5a8f0e3bd29f9a04952a2cfa0eb7b'
  }

  /**
   * An orbiter has registered
   */
  get asV1606(): {account: Uint8Array, deposit: bigint} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class MoonbeamOrbitersOrbiterRewardedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MoonbeamOrbiters.OrbiterRewarded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Paid the orbiter account the balance as liquid rewards.
   */
  get isV1502(): boolean {
    return this._chain.getEventHash('MoonbeamOrbiters.OrbiterRewarded') === '44a7364018ebad92746e4ca7c7c23d24d5da43cda2e63a90c665b522994ef1e2'
  }

  /**
   * Paid the orbiter account the balance as liquid rewards.
   */
  get asV1502(): {account: Uint8Array, rewards: bigint} {
    assert(this.isV1502)
    return this._chain.decodeEvent(this.event)
  }
}

export class MoonbeamOrbitersOrbiterRotationEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MoonbeamOrbiters.OrbiterRotation')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1502(): boolean {
    return this._chain.getEventHash('MoonbeamOrbiters.OrbiterRotation') === '119fe327a2ad1d2d83cb84504b77e7669cfa7d4299e61e5d9254bfba953e5287'
  }

  get asV1502(): {collator: Uint8Array, oldOrbiter: (Uint8Array | undefined), newOrbiter: (Uint8Array | undefined)} {
    assert(this.isV1502)
    return this._chain.decodeEvent(this.event)
  }
}

export class MoonbeamOrbitersOrbiterUnregisteredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MoonbeamOrbiters.OrbiterUnregistered')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An orbiter has unregistered
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('MoonbeamOrbiters.OrbiterUnregistered') === '041e3c99c7373645533b0a38437f03393c46e1c811b17689bc2c51c0b6784c09'
  }

  /**
   * An orbiter has unregistered
   */
  get asV1606(): {account: Uint8Array} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingBlocksPerRoundSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.BlocksPerRoundSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Set blocks per round [current_round, first_block, old, new, new_per_round_inflation]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.BlocksPerRoundSet') === 'e4152021d1ee1ef256174dc42d66e062f74a1c9931e09d42043918794fe8e45e'
  }

  /**
   * Set blocks per round [current_round, first_block, old, new, new_per_round_inflation]
   */
  get asV900(): [number, number, number, number, number, number, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Set blocks per round
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.BlocksPerRoundSet') === '74d8f3bfd5f29c3879a0a39bcc98bbbf2126b8bd8f84484d4798554409c999b3'
  }

  /**
   * Set blocks per round
   */
  get asV1300(): {currentRound: number, firstBlock: number, old: number, new: number, newPerRoundInflationMin: number, newPerRoundInflationIdeal: number, newPerRoundInflationMax: number} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCancelledCandidateBondLessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CancelledCandidateBondLess')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Candidate, Amount, Round at which could be executed
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.CancelledCandidateBondLess') === 'ac4a2cb6202f38a91408c4962e9d89e2aeee44f41b48ff7d3814f6b6b50364f2'
  }

  /**
   * Candidate, Amount, Round at which could be executed
   */
  get asV1001(): [Uint8Array, bigint, number] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Cancelled request to decrease candidate's bond.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.CancelledCandidateBondLess') === 'f826fb60e5cc9d34125ed0b42fb06baac1550bbedddd7d4fe1aafed0d01a816c'
  }

  /**
   * Cancelled request to decrease candidate's bond.
   */
  get asV1300(): {candidate: Uint8Array, amount: bigint, executeRound: number} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCancelledCandidateExitEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CancelledCandidateExit')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Candidate
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.CancelledCandidateExit') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
  }

  /**
   * Candidate
   */
  get asV1001(): Uint8Array {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Cancelled request to leave the set of candidates.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.CancelledCandidateExit') === '961106341022f16157715692b34ae57a6aa577d1f0cd80aa5e255bb45911c3ab'
  }

  /**
   * Cancelled request to leave the set of candidates.
   */
  get asV1300(): {candidate: Uint8Array} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCancelledDelegationRequestEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CancelledDelegationRequest')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Delegator, Cancelled Request
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.CancelledDelegationRequest') === '10ce9d3adb4a51c8b0f63cdbfba9117b990ab80118d4d67f6744b8fb925619ba'
  }

  /**
   * Delegator, Cancelled Request
   */
  get asV1001(): [Uint8Array, v1001.DelegationRequest] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Cancelled request to change an existing delegation.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.CancelledDelegationRequest') === 'c4fd492a56054a2ca2fe05b2147d56d8973374ab7f6854934b00562294c7003e'
  }

  /**
   * Cancelled request to change an existing delegation.
   */
  get asV1300(): {delegator: Uint8Array, cancelledRequest: v1300.DelegationRequest} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Cancelled request to change an existing delegation.
   */
  get isV1502(): boolean {
    return this._chain.getEventHash('ParachainStaking.CancelledDelegationRequest') === 'b7062032765ec2fe3af0b75de7733b9e8f539ab6ae9345a55f2c3d42c556b5e9'
  }

  /**
   * Cancelled request to change an existing delegation.
   */
  get asV1502(): {delegator: Uint8Array, cancelledRequest: v1502.CancelledScheduledRequest, collator: Uint8Array} {
    assert(this.isV1502)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCandidateBackOnlineEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CandidateBackOnline')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Round Online, Candidate
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateBackOnline') === '2c4b427c85c14124b733c4b45f6cbb10b5c350a45cd3602a0c8d079a17a2aa0c'
  }

  /**
   * Round Online, Candidate
   */
  get asV1001(): [number, Uint8Array] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Candidate
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateBackOnline') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
  }

  /**
   * Candidate
   */
  get asV1201(): Uint8Array {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Candidate rejoins the set of collator candidates.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateBackOnline') === '961106341022f16157715692b34ae57a6aa577d1f0cd80aa5e255bb45911c3ab'
  }

  /**
   * Candidate rejoins the set of collator candidates.
   */
  get asV1300(): {candidate: Uint8Array} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCandidateBondLessRequestedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CandidateBondLessRequested')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Candidate, Amount To Decrease, Round at which request can be executed by caller
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateBondLessRequested') === 'ac4a2cb6202f38a91408c4962e9d89e2aeee44f41b48ff7d3814f6b6b50364f2'
  }

  /**
   * Candidate, Amount To Decrease, Round at which request can be executed by caller
   */
  get asV1001(): [Uint8Array, bigint, number] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Сandidate requested to decrease a self bond.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateBondLessRequested') === '4361ab9ea706e9a2538ccae733bf65539092a17967e92e26af1aba7282c8d94b'
  }

  /**
   * Сandidate requested to decrease a self bond.
   */
  get asV1300(): {candidate: Uint8Array, amountToDecrease: bigint, executeRound: number} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCandidateBondedLessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CandidateBondedLess')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Candidate, Amount, New Bond
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateBondedLess') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc'
  }

  /**
   * Candidate, Amount, New Bond
   */
  get asV1001(): [Uint8Array, bigint, bigint] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Сandidate has decreased a self bond.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateBondedLess') === '03199d60c293c383f981694ba4310b187ed4a6b79fcc52e6fbccc691153b8f28'
  }

  /**
   * Сandidate has decreased a self bond.
   */
  get asV1300(): {candidate: Uint8Array, amount: bigint, newBond: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCandidateBondedMoreEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CandidateBondedMore')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Candidate, Amount, New Bond Total
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateBondedMore') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc'
  }

  /**
   * Candidate, Amount, New Bond Total
   */
  get asV1001(): [Uint8Array, bigint, bigint] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Сandidate has increased a self bond.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateBondedMore') === 'd6e6bcd7c6de9403e85285e3685e6774d7d1d129d84c7cfe9a4806c5ff5a4e54'
  }

  /**
   * Сandidate has increased a self bond.
   */
  get asV1300(): {candidate: Uint8Array, amount: bigint, newTotalBond: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCandidateLeftEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CandidateLeft')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Ex-Candidate, Amount Unlocked, New Total Amt Locked
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateLeft') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc'
  }

  /**
   * Ex-Candidate, Amount Unlocked, New Total Amt Locked
   */
  get asV1001(): [Uint8Array, bigint, bigint] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Candidate has left the set of candidates.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateLeft') === '39a5d795682d6a8426e0ee9f0ed61cb5d0d803a9c4303d42f2db829df56877b2'
  }

  /**
   * Candidate has left the set of candidates.
   */
  get asV1300(): {exCandidate: Uint8Array, unlockedAmount: bigint, newTotalAmtLocked: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCandidateScheduledExitEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CandidateScheduledExit')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Round At Which Exit Is Allowed, Candidate, Scheduled Exit
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateScheduledExit') === '663b8932716ea7b8bc0b8c9546ce1b3b1745381159b677646ac8c8bac33b2668'
  }

  /**
   * Round At Which Exit Is Allowed, Candidate, Scheduled Exit
   */
  get asV1001(): [number, Uint8Array, number] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Сandidate has requested to leave the set of candidates.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateScheduledExit') === 'f98c7404cb56a879fe28697e0f638920835a442bbb5c3d557d8c1267174c17e6'
  }

  /**
   * Сandidate has requested to leave the set of candidates.
   */
  get asV1300(): {exitAllowedRound: number, candidate: Uint8Array, scheduledExit: number} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCandidateWentOfflineEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CandidateWentOffline')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Round Offline, Candidate
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateWentOffline') === '2c4b427c85c14124b733c4b45f6cbb10b5c350a45cd3602a0c8d079a17a2aa0c'
  }

  /**
   * Round Offline, Candidate
   */
  get asV1001(): [number, Uint8Array] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Candidate
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateWentOffline') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
  }

  /**
   * Candidate
   */
  get asV1201(): Uint8Array {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Candidate temporarily leave the set of collator candidates without unbonding.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.CandidateWentOffline') === '961106341022f16157715692b34ae57a6aa577d1f0cd80aa5e255bb45911c3ab'
  }

  /**
   * Candidate temporarily leave the set of collator candidates without unbonding.
   */
  get asV1300(): {candidate: Uint8Array} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCollatorBackOnlineEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CollatorBackOnline')
    this._chain = ctx._chain
    this.event = event
  }

  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.CollatorBackOnline') === '2c4b427c85c14124b733c4b45f6cbb10b5c350a45cd3602a0c8d079a17a2aa0c'
  }

  get asV900(): [number, Uint8Array] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCollatorBondedLessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CollatorBondedLess')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Collator Account, Old Bond, New Bond
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.CollatorBondedLess') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc'
  }

  /**
   * Collator Account, Old Bond, New Bond
   */
  get asV900(): [Uint8Array, bigint, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCollatorBondedMoreEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CollatorBondedMore')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Collator Account, Old Bond, New Bond
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.CollatorBondedMore') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc'
  }

  /**
   * Collator Account, Old Bond, New Bond
   */
  get asV900(): [Uint8Array, bigint, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCollatorChosenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CollatorChosen')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Round, Collator Account, Total Exposed Amount (includes all nominations)
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.CollatorChosen') === '1a09639c5ef974a46276b0a553389f518b01ef6c4056a298ff48c6d5bea36cd0'
  }

  /**
   * Round, Collator Account, Total Exposed Amount (includes all nominations)
   */
  get asV900(): [number, Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Candidate selected for collators. Total Exposed Amount includes all delegations.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.CollatorChosen') === '2d748454279886b47219db9a8d2221a2144a27e25f21632b9439d8042ebf381d'
  }

  /**
   * Candidate selected for collators. Total Exposed Amount includes all delegations.
   */
  get asV1300(): {round: number, collatorAccount: Uint8Array, totalExposedAmount: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCollatorCommissionSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CollatorCommissionSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Set collator commission to this value [old, new]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.CollatorCommissionSet') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
  }

  /**
   * Set collator commission to this value [old, new]
   */
  get asV900(): [number, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Set collator commission to this value.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.CollatorCommissionSet') === '2a46248fcf922d799638b5954d60e33df4d7dd9113650c71660a937cd4b5613d'
  }

  /**
   * Set collator commission to this value.
   */
  get asV1300(): {old: number, new: number} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCollatorLeftEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CollatorLeft')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Account, Amount Unlocked, New Total Amt Locked
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.CollatorLeft') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc'
  }

  /**
   * Account, Amount Unlocked, New Total Amt Locked
   */
  get asV900(): [Uint8Array, bigint, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCollatorScheduledExitEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CollatorScheduledExit')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Round, Collator Account, Scheduled Exit
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.CollatorScheduledExit') === '663b8932716ea7b8bc0b8c9546ce1b3b1745381159b677646ac8c8bac33b2668'
  }

  /**
   * Round, Collator Account, Scheduled Exit
   */
  get asV900(): [number, Uint8Array, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingCollatorWentOfflineEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.CollatorWentOffline')
    this._chain = ctx._chain
    this.event = event
  }

  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.CollatorWentOffline') === '2c4b427c85c14124b733c4b45f6cbb10b5c350a45cd3602a0c8d079a17a2aa0c'
  }

  get asV900(): [number, Uint8Array] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegationEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.Delegation')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Delegator, Amount Locked, Candidate, Delegator Position with New Total Counted if in Top
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.Delegation') === '9e88e3dd4dec21ca4744b0264c96a88bfef8fa4f3a42c495ba697dcf51165507'
  }

  /**
   * Delegator, Amount Locked, Candidate, Delegator Position with New Total Counted if in Top
   */
  get asV1001(): [Uint8Array, bigint, Uint8Array, v1001.DelegatorAdded] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * New delegation (increase of the existing one).
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.Delegation') === 'a85b3e0f4dad63b1b710d554a6b0a8aa64b90a755bcae7ea3f4b677b36e5df82'
  }

  /**
   * New delegation (increase of the existing one).
   */
  get asV1300(): {delegator: Uint8Array, lockedAmount: bigint, candidate: Uint8Array, delegatorPosition: v1300.DelegatorAdded} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegationDecreaseScheduledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegationDecreaseScheduled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Delegator, Candidate, Amount to be decreased, Round at which can be executed
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegationDecreaseScheduled') === 'a918429239c3ed37475e76d0b5f5fe6547a17eadd96b52edd66569cd38ac85d2'
  }

  /**
   * Delegator, Candidate, Amount to be decreased, Round at which can be executed
   */
  get asV1001(): [Uint8Array, Uint8Array, bigint, number] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Delegator requested to decrease a bond for the collator candidate.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegationDecreaseScheduled') === '4a512adac6eb25ce552eb3d9c5ec842a7eb36c65e9b6f6be5248c3c779bbd6a1'
  }

  /**
   * Delegator requested to decrease a bond for the collator candidate.
   */
  get asV1300(): {delegator: Uint8Array, candidate: Uint8Array, amountToDecrease: bigint, executeRound: number} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegationDecreasedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegationDecreased')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegationDecreased') === 'cb87cf94019b8ebc544a6a9a05c01f439fe3dea8cbed08c97f1a1e60dd6ad4f3'
  }

  get asV1001(): [Uint8Array, Uint8Array, bigint, boolean] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegationDecreased') === '8ae2ca952b0b00ca6619c82b53d155a37de0be62eb9e8c32f4dad72b695e010b'
  }

  get asV1300(): {delegator: Uint8Array, candidate: Uint8Array, amount: bigint, inTop: boolean} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegationIncreasedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegationIncreased')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegationIncreased') === 'cb87cf94019b8ebc544a6a9a05c01f439fe3dea8cbed08c97f1a1e60dd6ad4f3'
  }

  get asV1001(): [Uint8Array, Uint8Array, bigint, boolean] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegationIncreased') === '8ae2ca952b0b00ca6619c82b53d155a37de0be62eb9e8c32f4dad72b695e010b'
  }

  get asV1300(): {delegator: Uint8Array, candidate: Uint8Array, amount: bigint, inTop: boolean} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegationKickedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegationKicked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Delegator, Candidate, Amount Unstaked
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegationKicked') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841'
  }

  /**
   * Delegator, Candidate, Amount Unstaked
   */
  get asV1201(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Delegation kicked.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegationKicked') === '013eacc8d6813b22ecdad778ecfffcc25ea1f31117d857d64978c177696e8697'
  }

  /**
   * Delegation kicked.
   */
  get asV1300(): {delegator: Uint8Array, candidate: Uint8Array, unstakedAmount: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegationRevocationScheduledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegationRevocationScheduled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Round, Delegator, Candidate, Scheduled Exit
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegationRevocationScheduled') === 'bbea00779607bea9b95ebd7a287ed32c7d72f1f2bb8708886348847d588e9f37'
  }

  /**
   * Round, Delegator, Candidate, Scheduled Exit
   */
  get asV1001(): [number, Uint8Array, Uint8Array, number] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Delegator requested to revoke delegation.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegationRevocationScheduled') === '504dce1a7e6548c2fe88285273d66693871c06cdc63a027b95932059e6db449a'
  }

  /**
   * Delegator requested to revoke delegation.
   */
  get asV1300(): {round: number, delegator: Uint8Array, candidate: Uint8Array, scheduledExit: number} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegationRevokedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegationRevoked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Delegator, Candidate, Amount Unstaked
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegationRevoked') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841'
  }

  /**
   * Delegator, Candidate, Amount Unstaked
   */
  get asV1001(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Delegation revoked.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegationRevoked') === '013eacc8d6813b22ecdad778ecfffcc25ea1f31117d857d64978c177696e8697'
  }

  /**
   * Delegation revoked.
   */
  get asV1300(): {delegator: Uint8Array, candidate: Uint8Array, unstakedAmount: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegatorDueRewardEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegatorDueReward')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Delegator, Collator, Due reward (as per counted delegation for collator)
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegatorDueReward') === 'dfcae516f053c47e7cb49e0718f01587efcb64cea4e3baf4c6973a29891f7841'
  }

  /**
   * Delegator, Collator, Due reward (as per counted delegation for collator)
   */
  get asV1001(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegatorExitCancelledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegatorExitCancelled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Delegator
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegatorExitCancelled') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
  }

  /**
   * Delegator
   */
  get asV1001(): Uint8Array {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Cancelled a pending request to exit the set of delegators.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegatorExitCancelled') === '6086e3ac2db66bcfb387faf1ca70ba1e85d2ef2facd21fe4ce5eeec4ea090cc6'
  }

  /**
   * Cancelled a pending request to exit the set of delegators.
   */
  get asV1300(): {delegator: Uint8Array} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegatorExitScheduledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegatorExitScheduled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Round, Delegator, Scheduled Exit
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegatorExitScheduled') === '663b8932716ea7b8bc0b8c9546ce1b3b1745381159b677646ac8c8bac33b2668'
  }

  /**
   * Round, Delegator, Scheduled Exit
   */
  get asV1001(): [number, Uint8Array, number] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Delegator requested to leave the set of delegators.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegatorExitScheduled') === '2e87cf1aa10c55d653ba3bde63d7d074ca36798d161d30b514c1e57fd090338c'
  }

  /**
   * Delegator requested to leave the set of delegators.
   */
  get asV1300(): {round: number, delegator: Uint8Array, scheduledExit: number} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegatorLeftEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegatorLeft')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Delegator, Amount Unstaked
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegatorLeft') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
  }

  /**
   * Delegator, Amount Unstaked
   */
  get asV1001(): [Uint8Array, bigint] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Delegator has left the set of delegators.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegatorLeft') === '77f204dee4c5a51e392aac1d070198e23c536d0b97569fee0484578613cd8777'
  }

  /**
   * Delegator has left the set of delegators.
   */
  get asV1300(): {delegator: Uint8Array, unstakedAmount: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingDelegatorLeftCandidateEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.DelegatorLeftCandidate')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Delegator, Candidate, Amount Unstaked, New Total Amt Staked for Candidate
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegatorLeftCandidate') === 'c5569fad693da6ab49df69c2cc3a1767b0c18bfc1f206847e0946659f6cd24ef'
  }

  /**
   * Delegator, Candidate, Amount Unstaked, New Total Amt Staked for Candidate
   */
  get asV1001(): [Uint8Array, Uint8Array, bigint, bigint] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Delegation from candidate state has been remove.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.DelegatorLeftCandidate') === 'f72ae455b6ae66e6fabad54fadb0ae26f7136099a377372b74890536d4007422'
  }

  /**
   * Delegation from candidate state has been remove.
   */
  get asV1300(): {delegator: Uint8Array, candidate: Uint8Array, unstakedAmount: bigint, totalCandidateStaked: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingInflationSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.InflationSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Annual inflation input (first 3) was used to derive new per-round inflation (last 3)
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.InflationSet') === '1ce78cca34ae2c08e45f267ebfc3e35706c619bb5f5726881e139f64ff94402e'
  }

  /**
   * Annual inflation input (first 3) was used to derive new per-round inflation (last 3)
   */
  get asV900(): [number, number, number, number, number, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Annual inflation input (first 3) was used to derive new per-round inflation (last 3)
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.InflationSet') === '6eae1c9cc0a52424f3a2724c2e3727bd3861cd6d631a605d47134df51d2a275a'
  }

  /**
   * Annual inflation input (first 3) was used to derive new per-round inflation (last 3)
   */
  get asV1300(): {annualMin: number, annualIdeal: number, annualMax: number, roundMin: number, roundIdeal: number, roundMax: number} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingJoinedCollatorCandidatesEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.JoinedCollatorCandidates')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Account, Amount Locked, New Total Amt Locked
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.JoinedCollatorCandidates') === '7d53ab304de2c1ff2ac70be085ea6ab305e3a4df52dde9c25829171c7376cebc'
  }

  /**
   * Account, Amount Locked, New Total Amt Locked
   */
  get asV900(): [Uint8Array, bigint, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Account joined the set of collator candidates.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.JoinedCollatorCandidates') === '227a8d2310a3cd3b98057acb86b906dcde376e61a13f5a50db8589a31b218c17'
  }

  /**
   * Account joined the set of collator candidates.
   */
  get asV1300(): {account: Uint8Array, amountLocked: bigint, newTotalAmtLocked: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingNewRoundEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.NewRound')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Starting Block, Round, Number of Collators Selected, Total Balance
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.NewRound') === '40ffda4d99fbb38b23cc20386a7f622d64120f24ccc70b9f85ce7612cd87c3b7'
  }

  /**
   * Starting Block, Round, Number of Collators Selected, Total Balance
   */
  get asV900(): [number, number, number, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Started new round.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.NewRound') === '36b479d535ff0b4066a6ca7641a4dba5e090be428fc6b6e9fe8fec13d953fcfb'
  }

  /**
   * Started new round.
   */
  get asV1300(): {startingBlock: number, round: number, selectedCollatorsNumber: number, totalBalance: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingNominationEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.Nomination')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Nominator, Amount Locked, Collator, Nominator Position with New Total Counted if in Top
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.Nomination') === '9e88e3dd4dec21ca4744b0264c96a88bfef8fa4f3a42c495ba697dcf51165507'
  }

  /**
   * Nominator, Amount Locked, Collator, Nominator Position with New Total Counted if in Top
   */
  get asV900(): [Uint8Array, bigint, Uint8Array, v900.NominatorAdded] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingNominationDecreasedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.NominationDecreased')
    this._chain = ctx._chain
    this.event = event
  }

  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.NominationDecreased') === 'cb87cf94019b8ebc544a6a9a05c01f439fe3dea8cbed08c97f1a1e60dd6ad4f3'
  }

  get asV900(): [Uint8Array, Uint8Array, bigint, boolean] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingNominationIncreasedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.NominationIncreased')
    this._chain = ctx._chain
    this.event = event
  }

  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.NominationIncreased') === 'cb87cf94019b8ebc544a6a9a05c01f439fe3dea8cbed08c97f1a1e60dd6ad4f3'
  }

  get asV900(): [Uint8Array, Uint8Array, bigint, boolean] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingNominationRevocationScheduledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.NominationRevocationScheduled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Round, Nominator, Collator, Scheduled Exit
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.NominationRevocationScheduled') === 'bbea00779607bea9b95ebd7a287ed32c7d72f1f2bb8708886348847d588e9f37'
  }

  /**
   * Round, Nominator, Collator, Scheduled Exit
   */
  get asV900(): [number, Uint8Array, Uint8Array, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingNominatorExitScheduledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.NominatorExitScheduled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Round, Nominator, Scheduled Exit
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.NominatorExitScheduled') === '663b8932716ea7b8bc0b8c9546ce1b3b1745381159b677646ac8c8bac33b2668'
  }

  /**
   * Round, Nominator, Scheduled Exit
   */
  get asV900(): [number, Uint8Array, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingNominatorLeftEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.NominatorLeft')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Nominator, Amount Unstaked
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.NominatorLeft') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
  }

  /**
   * Nominator, Amount Unstaked
   */
  get asV900(): [Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingNominatorLeftCollatorEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.NominatorLeftCollator')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Nominator, Collator, Amount Unstaked, New Total Amt Staked for Collator
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.NominatorLeftCollator') === 'c5569fad693da6ab49df69c2cc3a1767b0c18bfc1f206847e0946659f6cd24ef'
  }

  /**
   * Nominator, Collator, Amount Unstaked, New Total Amt Staked for Collator
   */
  get asV900(): [Uint8Array, Uint8Array, bigint, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingParachainBondAccountSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.ParachainBondAccountSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Account (re)set for parachain bond treasury [old, new]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.ParachainBondAccountSet') === 'e425676e43dfa0f66531077a677904af26bdb7406850c1a937ed39ce997aebee'
  }

  /**
   * Account (re)set for parachain bond treasury [old, new]
   */
  get asV900(): [Uint8Array, Uint8Array] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Account (re)set for parachain bond treasury.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.ParachainBondAccountSet') === '391b7a792248e7221ffbf77c01942251d2928a4e2b37c8103704237e0d5f69b6'
  }

  /**
   * Account (re)set for parachain bond treasury.
   */
  get asV1300(): {old: Uint8Array, new: Uint8Array} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingParachainBondReservePercentSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.ParachainBondReservePercentSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Percent of inflation reserved for parachain bond (re)set [old, new]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.ParachainBondReservePercentSet') === 'd2cc88fb598c6a1f724a0f2f04633626baef451eecc351a9d5092f82e6c46465'
  }

  /**
   * Percent of inflation reserved for parachain bond (re)set [old, new]
   */
  get asV900(): [number, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Percent of inflation reserved for parachain bond (re)set.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.ParachainBondReservePercentSet') === '4416290d0d279f778bdd022e996767b16d74caaec023f9380514b1862c75b357'
  }

  /**
   * Percent of inflation reserved for parachain bond (re)set.
   */
  get asV1300(): {old: number, new: number} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingReservedForParachainBondEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.ReservedForParachainBond')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transferred to account which holds funds reserved for parachain bond
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.ReservedForParachainBond') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
  }

  /**
   * Transferred to account which holds funds reserved for parachain bond
   */
  get asV900(): [Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transferred to account which holds funds reserved for parachain bond.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.ReservedForParachainBond') === 'f78c82b8762f1309d2fbca1935e04e3419179c059d2e42e6f63bc6e99387beae'
  }

  /**
   * Transferred to account which holds funds reserved for parachain bond.
   */
  get asV1300(): {account: Uint8Array, value: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingRewardedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.Rewarded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Paid the account (nominator or collator) the balance as liquid rewards
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.Rewarded') === 'e4f02aa7cee015102b6cbc171f5d7e84370e60deba2166a27195187adde0407f'
  }

  /**
   * Paid the account (nominator or collator) the balance as liquid rewards
   */
  get asV900(): [Uint8Array, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Paid the account (delegator or collator) the balance as liquid rewards.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.Rewarded') === '44a7364018ebad92746e4ca7c7c23d24d5da43cda2e63a90c665b522994ef1e2'
  }

  /**
   * Paid the account (delegator or collator) the balance as liquid rewards.
   */
  get asV1300(): {account: Uint8Array, rewards: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingStakeExpectationsSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.StakeExpectationsSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Staking expectations set
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.StakeExpectationsSet') === 'bf419ba71120d15f9bdbc07cda0fa31db10c75992583ec976d4c343db396181c'
  }

  /**
   * Staking expectations set
   */
  get asV900(): [bigint, bigint, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Staking expectations set.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.StakeExpectationsSet') === 'd8561f533aee1b8ba1c36d259010dca00cbc71ab7eb327cf0fa605d647371c6f'
  }

  /**
   * Staking expectations set.
   */
  get asV1300(): {expectMin: bigint, expectIdeal: bigint, expectMax: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainStakingTotalSelectedSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainStaking.TotalSelectedSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Set total selected candidates to this value [old, new]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainStaking.TotalSelectedSet') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
  }

  /**
   * Set total selected candidates to this value [old, new]
   */
  get asV900(): [number, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Set total selected candidates to this value.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('ParachainStaking.TotalSelectedSet') === '2a46248fcf922d799638b5954d60e33df4d7dd9113650c71660a937cd4b5613d'
  }

  /**
   * Set total selected candidates to this value.
   */
  get asV1300(): {old: number, new: number} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemDownwardMessagesProcessedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.DownwardMessagesProcessed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward messages were processed using the given weight.
   * \[ weight_used, result_mqc_head \]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '62ab179c459e900954ede92a01f149d553e9317efc7d0129525f40d631e8b38f'
  }

  /**
   * Downward messages were processed using the given weight.
   * \[ weight_used, result_mqc_head \]
   */
  get asV900(): [bigint, Uint8Array] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward messages were processed using the given weight.
   */
  get isV1701(): boolean {
    return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '83022e6226975081ba018c2b45a90d494bc922ece44e69af0322583651264f8e'
  }

  /**
   * Downward messages were processed using the given weight.
   */
  get asV1701(): {weightUsed: bigint, dmqHead: Uint8Array} {
    assert(this.isV1701)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemDownwardMessagesReceivedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.DownwardMessagesReceived')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some downward messages have been received and will be processed.
   * \[ count \]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainSystem.DownwardMessagesReceived') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * Some downward messages have been received and will be processed.
   * \[ count \]
   */
  get asV900(): number {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some downward messages have been received and will be processed.
   */
  get isV1701(): boolean {
    return this._chain.getEventHash('ParachainSystem.DownwardMessagesReceived') === '1cdbdc8ac203922f95ae6ab3e8b98004e956389f7ec11480ec5633d29b48cf71'
  }

  /**
   * Some downward messages have been received and will be processed.
   */
  get asV1701(): {count: number} {
    assert(this.isV1701)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemUpgradeAuthorizedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.UpgradeAuthorized')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An upgrade has been authorized.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainSystem.UpgradeAuthorized') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * An upgrade has been authorized.
   */
  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An upgrade has been authorized.
   */
  get isV1701(): boolean {
    return this._chain.getEventHash('ParachainSystem.UpgradeAuthorized') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
  }

  /**
   * An upgrade has been authorized.
   */
  get asV1701(): {codeHash: Uint8Array} {
    assert(this.isV1701)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemValidationFunctionAppliedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.ValidationFunctionApplied')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The validation function was applied as of the contained relay chain block number.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionApplied') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * The validation function was applied as of the contained relay chain block number.
   */
  get asV900(): number {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The validation function was applied as of the contained relay chain block number.
   */
  get isV1701(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionApplied') === 'f35adbaa82c93636884997faedd16369ac498b9208d7c11f2233b9ef2aa4f092'
  }

  /**
   * The validation function was applied as of the contained relay chain block number.
   */
  get asV1701(): {relayChainBlockNum: number} {
    assert(this.isV1701)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemValidationFunctionDiscardedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.ValidationFunctionDiscarded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The relay-chain aborted the upgrade process.
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionDiscarded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * The relay-chain aborted the upgrade process.
   */
  get asV1001(): null {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemValidationFunctionStoredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.ValidationFunctionStored')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The validation function has been scheduled to apply as of the contained relay chain
   * block number.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionStored') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * The validation function has been scheduled to apply as of the contained relay chain
   * block number.
   */
  get asV900(): number {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The validation function has been scheduled to apply.
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionStored') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * The validation function has been scheduled to apply.
   */
  get asV1001(): null {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmAssetsTrappedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.AssetsTrapped')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some assets have been placed in an asset trap.
   * 
   * \[ hash, origin, assets \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('PolkadotXcm.AssetsTrapped') === '0663ceb24fcbc7c249c0d23c9fc7292b881f8cf18a5c2ade1e5b4a25b0a6d900'
  }

  /**
   * Some assets have been placed in an asset trap.
   * 
   * \[ hash, origin, assets \]
   */
  get asV1201(): [Uint8Array, v1201.V1MultiLocation, v1201.VersionedMultiAssets] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmAttemptedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.Attempted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Execution of an XCM message was attempted.
   * 
   * \[ outcome \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Attempted') === '193515c3b0e5bbe78313ce7bb5d80d3c789be70e0085c1d43ce0347187c43a50'
  }

  /**
   * Execution of an XCM message was attempted.
   * 
   * \[ outcome \]
   */
  get asV1201(): v1201.V2Outcome {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Execution of an XCM message was attempted.
   * 
   * \[ outcome \]
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Attempted') === '4154651e242bd6b6bc077aa66e91ede994df17d6d31ec8746fb77b61829f6cc1'
  }

  /**
   * Execution of an XCM message was attempted.
   * 
   * \[ outcome \]
   */
  get asV1300(): v1300.V2Outcome {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmInvalidResponderEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.InvalidResponder')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Expected query response has been received but the origin location of the response does
   * not match that expected. The query remains registered for a later, valid, response to
   * be received and acted upon.
   * 
   * \[ origin location, id, expected location \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('PolkadotXcm.InvalidResponder') === 'aca6b87c79cd283d77249dae5d6ff6b7249a24e95958b723f47cd2333f0e9bc1'
  }

  /**
   * Expected query response has been received but the origin location of the response does
   * not match that expected. The query remains registered for a later, valid, response to
   * be received and acted upon.
   * 
   * \[ origin location, id, expected location \]
   */
  get asV1201(): [v1201.V1MultiLocation, bigint, (v1201.V1MultiLocation | undefined)] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmInvalidResponderVersionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.InvalidResponderVersion')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Expected query response has been received but the expected origin location placed in
   * storage by this runtime previously cannot be decoded. The query remains registered.
   * 
   * This is unexpected (since a location placed in storage in a previously executing
   * runtime should be readable prior to query timeout) and dangerous since the possibly
   * valid response will be dropped. Manual governance intervention is probably going to be
   * needed.
   * 
   * \[ origin location, id \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('PolkadotXcm.InvalidResponderVersion') === 'c9ed91cb137ad1f5cd40162c8e40b33e2e6b9cdc244bb5c6f95922b4971639ae'
  }

  /**
   * Expected query response has been received but the expected origin location placed in
   * storage by this runtime previously cannot be decoded. The query remains registered.
   * 
   * This is unexpected (since a location placed in storage in a previously executing
   * runtime should be readable prior to query timeout) and dangerous since the possibly
   * valid response will be dropped. Manual governance intervention is probably going to be
   * needed.
   * 
   * \[ origin location, id \]
   */
  get asV1201(): [v1201.V1MultiLocation, bigint] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifiedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.Notified')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and query is removed. The registered notification has
   * been dispatched and executed successfully.
   * 
   * \[ id, pallet index, call index \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Notified') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
  }

  /**
   * Query response has been received and query is removed. The registered notification has
   * been dispatched and executed successfully.
   * 
   * \[ id, pallet index, call index \]
   */
  get asV1201(): [bigint, number, number] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyDecodeFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyDecodeFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and query is removed. The dispatch was unable to be
   * decoded into a `Call`; this might be due to dispatch function having a signature which
   * is not `(origin, QueryId, Response)`.
   * 
   * \[ id, pallet index, call index \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyDecodeFailed') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
  }

  /**
   * Query response has been received and query is removed. The dispatch was unable to be
   * decoded into a `Call`; this might be due to dispatch function having a signature which
   * is not `(origin, QueryId, Response)`.
   * 
   * \[ id, pallet index, call index \]
   */
  get asV1201(): [bigint, number, number] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyDispatchErrorEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyDispatchError')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and query is removed. There was a general error with
   * dispatching the notification call.
   * 
   * \[ id, pallet index, call index \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyDispatchError') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
  }

  /**
   * Query response has been received and query is removed. There was a general error with
   * dispatching the notification call.
   * 
   * \[ id, pallet index, call index \]
   */
  get asV1201(): [bigint, number, number] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyOverweightEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyOverweight')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and query is removed. The registered notification could
   * not be dispatched because the dispatch weight is greater than the maximum weight
   * originally budgeted by this runtime for the query result.
   * 
   * \[ id, pallet index, call index, actual weight, max budgeted weight \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyOverweight') === '0104ccc866506c43592e56f342852c22c060b58c586141b7900f6ad97353e8b2'
  }

  /**
   * Query response has been received and query is removed. The registered notification could
   * not be dispatched because the dispatch weight is greater than the maximum weight
   * originally budgeted by this runtime for the query result.
   * 
   * \[ id, pallet index, call index, actual weight, max budgeted weight \]
   */
  get asV1201(): [bigint, number, number, bigint, bigint] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyTargetMigrationFailEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyTargetMigrationFail')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * migrating the location to our new XCM format.
   * 
   * \[ location, query ID \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyTargetMigrationFail') === 'b02879418cace85908884f92e4b915e3b448f9e06d9bcc0edcce01ed9bc5b644'
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * migrating the location to our new XCM format.
   * 
   * \[ location, query ID \]
   */
  get asV1201(): [v1201.VersionedMultiLocation, bigint] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyTargetSendFailEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyTargetSendFail')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * sending the notification to it.
   * 
   * \[ location, query ID, error \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '691ecac12054acab4727e4ac3bcc4cc884bcf98e86e777b9c154133f1ff85778'
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * sending the notification to it.
   * 
   * \[ location, query ID, error \]
   */
  get asV1201(): [v1201.V1MultiLocation, bigint, v1201.V2Error] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * sending the notification to it.
   * 
   * \[ location, query ID, error \]
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '0d47fb7e1a9ccdfd8879b0e483179d5b2c7b29bd5db653557e266536bc40f9a0'
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * sending the notification to it.
   * 
   * \[ location, query ID, error \]
   */
  get asV1300(): [v1300.V1MultiLocation, bigint, v1300.V2Error] {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmResponseReadyEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.ResponseReady')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and is ready for taking with `take_response`. There is
   * no registered notification call.
   * 
   * \[ id, response \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('PolkadotXcm.ResponseReady') === 'e6cd72b673b499abf36b946b4ab2a4531e2ca4af4aa3d41e14bafae7b2502409'
  }

  /**
   * Query response has been received and is ready for taking with `take_response`. There is
   * no registered notification call.
   * 
   * \[ id, response \]
   */
  get asV1201(): [bigint, v1201.V2Response] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Query response has been received and is ready for taking with `take_response`. There is
   * no registered notification call.
   * 
   * \[ id, response \]
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('PolkadotXcm.ResponseReady') === '122689cbd0466e99035c5eeda9c178ed25d8a8fee01f9de0d818f7e86cd5e333'
  }

  /**
   * Query response has been received and is ready for taking with `take_response`. There is
   * no registered notification call.
   * 
   * \[ id, response \]
   */
  get asV1300(): [bigint, v1300.V2Response] {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmResponseTakenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.ResponseTaken')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Received query response has been read and removed.
   * 
   * \[ id \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('PolkadotXcm.ResponseTaken') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
  }

  /**
   * Received query response has been read and removed.
   * 
   * \[ id \]
   */
  get asV1201(): bigint {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmSentEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.Sent')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A XCM message was sent.
   * 
   * \[ origin, destination, message \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Sent') === '1a2c2f0f587aa6cafef526c4c8aabbb80179c1dda79383508e93899dd8a8604c'
  }

  /**
   * A XCM message was sent.
   * 
   * \[ origin, destination, message \]
   */
  get asV1201(): [v1201.V1MultiLocation, v1201.V1MultiLocation, v1201.V2Instruction[]] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A XCM message was sent.
   * 
   * \[ origin, destination, message \]
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Sent') === 'ae5e308764e970ce405a89338cec74552db382f20b13af73b16c9b7b172754e4'
  }

  /**
   * A XCM message was sent.
   * 
   * \[ origin, destination, message \]
   */
  get asV1300(): [v1300.V1MultiLocation, v1300.V1MultiLocation, v1300.V2Instruction[]] {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmSupportedVersionChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.SupportedVersionChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The supported version of a location has been changed. This might be through an
   * automatic notification or a manual intervention.
   * 
   * \[ location, XCM version \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('PolkadotXcm.SupportedVersionChanged') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
  }

  /**
   * The supported version of a location has been changed. This might be through an
   * automatic notification or a manual intervention.
   * 
   * \[ location, XCM version \]
   */
  get asV1201(): [v1201.V1MultiLocation, number] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmUnexpectedResponseEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.UnexpectedResponse')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response received which does not match a registered query. This may be because a
   * matching query was never registered, it may be because it is a duplicate response, or
   * because the query timed out.
   * 
   * \[ origin location, id \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('PolkadotXcm.UnexpectedResponse') === 'c9ed91cb137ad1f5cd40162c8e40b33e2e6b9cdc244bb5c6f95922b4971639ae'
  }

  /**
   * Query response received which does not match a registered query. This may be because a
   * matching query was never registered, it may be because it is a duplicate response, or
   * because the query timed out.
   * 
   * \[ origin location, id \]
   */
  get asV1201(): [v1201.V1MultiLocation, bigint] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmVersionChangeNotifiedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.VersionChangeNotified')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An XCM version change notification message has been attempted to be sent.
   * 
   * \[ destination, result \]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('PolkadotXcm.VersionChangeNotified') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
  }

  /**
   * An XCM version change notification message has been attempted to be sent.
   * 
   * \[ destination, result \]
   */
  get asV1201(): [v1201.V1MultiLocation, number] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class ProxyAnnouncedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Proxy.Announced')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Proxy.Announced') === '6ce9683d07765a8355791f785aa1c03acadcc9bf60e78ec09973049a25f86240'
  }

  /**
   * An announcement was placed to make a call in the future. \[real, proxy, call_hash\]
   */
  get asV900(): [Uint8Array, Uint8Array, Uint8Array] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An announcement was placed to make a call in the future.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Proxy.Announced') === 'bfd4ccd75ff1f3d21a9649d28c9cbe68c35111a02ce358fb351b0ace2e5ddead'
  }

  /**
   * An announcement was placed to make a call in the future.
   */
  get asV1201(): {real: Uint8Array, proxy: Uint8Array, callHash: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class ProxyAnonymousCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Proxy.AnonymousCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Anonymous account has been created by new proxy with given
   * disambiguation index and proxy type. \[anonymous, who, proxy_type,
   * disambiguation_index\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Proxy.AnonymousCreated') === 'fc5e9c86e5f6e3a91a9803270b8231a2773188f001c77cf2c9770986eef11981'
  }

  /**
   * Anonymous account has been created by new proxy with given
   * disambiguation index and proxy type. \[anonymous, who, proxy_type,
   * disambiguation_index\]
   */
  get asV900(): [Uint8Array, Uint8Array, v900.ProxyType, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Anonymous account has been created by new proxy with given
   * disambiguation index and proxy type.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Proxy.AnonymousCreated') === 'db2a3c65a169af33cff66103f1f0f425c4021082ae537afef69d7d1c59677906'
  }

  /**
   * Anonymous account has been created by new proxy with given
   * disambiguation index and proxy type.
   */
  get asV1201(): {anonymous: Uint8Array, who: Uint8Array, proxyType: v1201.ProxyType, disambiguationIndex: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Anonymous account has been created by new proxy with given
   * disambiguation index and proxy type.
   */
  get isV1701(): boolean {
    return this._chain.getEventHash('Proxy.AnonymousCreated') === '6be83142c424012785bb4b755c779eccc9749e88fbccf01c050f9d04e352df59'
  }

  /**
   * Anonymous account has been created by new proxy with given
   * disambiguation index and proxy type.
   */
  get asV1701(): {anonymous: Uint8Array, who: Uint8Array, proxyType: v1701.ProxyType, disambiguationIndex: number} {
    assert(this.isV1701)
    return this._chain.decodeEvent(this.event)
  }
}

export class ProxyProxyAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Proxy.ProxyAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proxy was added. \[delegator, delegatee, proxy_type, delay\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Proxy.ProxyAdded') === '6ed088d1f634d87310d521ca3c8d2bcfcaa890914a07e98731596a98d09f02f3'
  }

  /**
   * A proxy was added. \[delegator, delegatee, proxy_type, delay\]
   */
  get asV900(): [Uint8Array, Uint8Array, v900.ProxyType, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proxy was added.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Proxy.ProxyAdded') === '29490982f5f5e430093f31c39e47df095176a8e2fcc9bd783dd7dbc9353211f3'
  }

  /**
   * A proxy was added.
   */
  get asV1201(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v1201.ProxyType, delay: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proxy was added.
   */
  get isV1701(): boolean {
    return this._chain.getEventHash('Proxy.ProxyAdded') === 'ec182b84d8142fab410a8bcf26875a9d45c21205f402aebdaa6a77c2dc59606c'
  }

  /**
   * A proxy was added.
   */
  get asV1701(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v1701.ProxyType, delay: number} {
    assert(this.isV1701)
    return this._chain.decodeEvent(this.event)
  }
}

export class ProxyProxyExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Proxy.ProxyExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proxy was executed correctly, with the given \[result\].
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Proxy.ProxyExecuted') === 'ab888611b1630e8ada6ae91aa73bbcaa3417be141a0a0db92f4f509e4cfba02a'
  }

  /**
   * A proxy was executed correctly, with the given \[result\].
   */
  get asV900(): Result<null, v900.DispatchError> {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Proxy.ProxyExecuted') === 'd96aa7f2eece8cc4576093229086d4b5035cea1c38d31c9f4c7fb8ed70fb6bcc'
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get asV1201(): {result: Result<null, v1201.DispatchError>} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Proxy.ProxyExecuted') === 'a5f93f40c8dbc0e7785a5800c0344513f6a8b6a6a0394b0938320dec7e44be85'
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get asV1300(): {result: Result<null, v1300.DispatchError>} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('Proxy.ProxyExecuted') === '437b0d6b61f01d02ca149f7d3a9e00406fc26ecde780532ed80e532801995307'
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get asV1401(): {result: Result<null, v1401.DispatchError>} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('Proxy.ProxyExecuted') === 'cbb13e6f8f0e2a0b00b89705f05de04cf34bbb44653bcdccedddc8448bc95bfc'
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get asV1606(): {result: Result<null, v1606.DispatchError>} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class ProxyProxyRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Proxy.ProxyRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proxy was removed.
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('Proxy.ProxyRemoved') === '29490982f5f5e430093f31c39e47df095176a8e2fcc9bd783dd7dbc9353211f3'
  }

  /**
   * A proxy was removed.
   */
  get asV1606(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v1606.ProxyType, delay: number} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proxy was removed.
   */
  get isV1701(): boolean {
    return this._chain.getEventHash('Proxy.ProxyRemoved') === 'ec182b84d8142fab410a8bcf26875a9d45c21205f402aebdaa6a77c2dc59606c'
  }

  /**
   * A proxy was removed.
   */
  get asV1701(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v1701.ProxyType, delay: number} {
    assert(this.isV1701)
    return this._chain.decodeEvent(this.event)
  }
}

export class SchedulerCallLookupFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Scheduler.CallLookupFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The call for the provided hash was not found so the task has been aborted.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Scheduler.CallLookupFailed') === 'ecc6a872eaa4608ccd69e4dfbf292a89f058591fc70991470a93ba1be36fd2e4'
  }

  /**
   * The call for the provided hash was not found so the task has been aborted.
   */
  get asV1300(): {task: [number, number], id: (Uint8Array | undefined), error: v1300.LookupError} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class SchedulerCanceledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Scheduler.Canceled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Canceled some task. \[when, index\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Scheduler.Canceled') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
  }

  /**
   * Canceled some task. \[when, index\]
   */
  get asV900(): [number, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Canceled some task.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Scheduler.Canceled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
  }

  /**
   * Canceled some task.
   */
  get asV1300(): {when: number, index: number} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class SchedulerDispatchedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Scheduler.Dispatched')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Dispatched some task. \[task, id, result\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Scheduler.Dispatched') === '12c2631182bbd65384b8ff2afee779ec1941e149568c871b28bde1f87c6afab0'
  }

  /**
   * Dispatched some task. \[task, id, result\]
   */
  get asV900(): [[number, number], (Uint8Array | undefined), Result<null, v900.DispatchError>] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Dispatched some task.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Scheduler.Dispatched') === '439ef87771a96fe3726e3ffb055c38438b502913c76a8fada434b22e13a72246'
  }

  /**
   * Dispatched some task.
   */
  get asV1300(): {task: [number, number], id: (Uint8Array | undefined), result: Result<null, v1300.DispatchError>} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Dispatched some task.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('Scheduler.Dispatched') === '39cf66f8b318db4669e183ffaa1290aec1f8ac972b379087a931cf63e5ddf8f9'
  }

  /**
   * Dispatched some task.
   */
  get asV1401(): {task: [number, number], id: (Uint8Array | undefined), result: Result<null, v1401.DispatchError>} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Dispatched some task.
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('Scheduler.Dispatched') === '3fd36e1da4dd6a57fbaf34f23c31e64a8c167849f0135f4fce7567f3db728290'
  }

  /**
   * Dispatched some task.
   */
  get asV1606(): {task: [number, number], id: (Uint8Array | undefined), result: Result<null, v1606.DispatchError>} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class SchedulerScheduledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Scheduler.Scheduled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Scheduled some task. \[when, index\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Scheduler.Scheduled') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
  }

  /**
   * Scheduled some task. \[when, index\]
   */
  get asV900(): [number, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Scheduled some task.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Scheduler.Scheduled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
  }

  /**
   * Scheduled some task.
   */
  get asV1300(): {when: number, index: number} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class SudoKeyChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sudo.KeyChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The \[sudoer\] just switched identity; the old key is supplied.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Sudo.KeyChanged') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
  }

  /**
   * The \[sudoer\] just switched identity; the old key is supplied.
   */
  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SudoSudidEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sudo.Sudid')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A sudo just took place. \[result\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Sudo.Sudid') === 'ab888611b1630e8ada6ae91aa73bbcaa3417be141a0a0db92f4f509e4cfba02a'
  }

  /**
   * A sudo just took place. \[result\]
   */
  get asV900(): Result<null, v900.DispatchError> {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SudoSudoAsDoneEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sudo.SudoAsDone')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A sudo just took place. \[result\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Sudo.SudoAsDone') === 'ab888611b1630e8ada6ae91aa73bbcaa3417be141a0a0db92f4f509e4cfba02a'
  }

  /**
   * A sudo just took place. \[result\]
   */
  get asV900(): Result<null, v900.DispatchError> {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemCodeUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.CodeUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * `:code` was updated.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * `:code` was updated.
   */
  get asV900(): null {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemExtrinsicFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.ExtrinsicFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An extrinsic failed. \[error, info\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('System.ExtrinsicFailed') === '0995776ff5e8d5f8662a6841d8556c830acc58fbb01f76a13b6aa4222b987150'
  }

  /**
   * An extrinsic failed. \[error, info\]
   */
  get asV900(): [v900.DispatchError, v900.DispatchInfo] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An extrinsic failed.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('System.ExtrinsicFailed') === '2dcccc93ed3f24e5499fe9480fe0a61a806d25bb5fc0d10a1074e360693768e7'
  }

  /**
   * An extrinsic failed.
   */
  get asV1300(): {dispatchError: v1300.DispatchError, dispatchInfo: v1300.DispatchInfo} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An extrinsic failed.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('System.ExtrinsicFailed') === '3b8e9f2b48f4b6f0f996d20434018cdbe20aacb2470e779d965d42dad18b0a4e'
  }

  /**
   * An extrinsic failed.
   */
  get asV1401(): {dispatchError: v1401.DispatchError, dispatchInfo: v1401.DispatchInfo} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An extrinsic failed.
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('System.ExtrinsicFailed') === 'a6220584fa4f22cb02db1bfad4eacf1a689aea2324f22b4763def7376b7dd9bf'
  }

  /**
   * An extrinsic failed.
   */
  get asV1606(): {dispatchError: v1606.DispatchError, dispatchInfo: v1606.DispatchInfo} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemExtrinsicSuccessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.ExtrinsicSuccess')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An extrinsic completed successfully. \[info\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('System.ExtrinsicSuccess') === '00a75e03130fe6755b02b23ca285a19efc2bd57964ead02525eedef36cbf1bd4'
  }

  /**
   * An extrinsic completed successfully. \[info\]
   */
  get asV900(): v900.DispatchInfo {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An extrinsic completed successfully.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('System.ExtrinsicSuccess') === '407ed94c14f243acbe2cdb53df52c37d97bbb5ae550a10a6036bf59677cdd165'
  }

  /**
   * An extrinsic completed successfully.
   */
  get asV1300(): {dispatchInfo: v1300.DispatchInfo} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemKilledAccountEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.KilledAccount')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An \[account\] was reaped.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('System.KilledAccount') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
  }

  /**
   * An \[account\] was reaped.
   */
  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was reaped.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('System.KilledAccount') === '041e3c99c7373645533b0a38437f03393c46e1c811b17689bc2c51c0b6784c09'
  }

  /**
   * An account was reaped.
   */
  get asV1300(): {account: Uint8Array} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemNewAccountEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.NewAccount')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new \[account\] was created.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('System.NewAccount') === '15bab564ac60f719121cf1b5dee312d333f0648b54550beefdf79deda6264096'
  }

  /**
   * A new \[account\] was created.
   */
  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A new account was created.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('System.NewAccount') === '041e3c99c7373645533b0a38437f03393c46e1c811b17689bc2c51c0b6784c09'
  }

  /**
   * A new account was created.
   */
  get asV1300(): {account: Uint8Array} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemRemarkedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.Remarked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * On on-chain remark happened. \[origin, remark_hash\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('System.Remarked') === 'a941d1ba1ef0ab46f674f7ed2a79f38731ff31d1bff081d4a00ce14eba1e6808'
  }

  /**
   * On on-chain remark happened. \[origin, remark_hash\]
   */
  get asV900(): [Uint8Array, Uint8Array] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * On on-chain remark happened.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('System.Remarked') === 'aeed1c1d467ca7ef8cb28e828b4c151ed9cf2a6a928b055559fe3cd7c73e790c'
  }

  /**
   * On on-chain remark happened.
   */
  get asV1300(): {sender: Uint8Array, hash: Uint8Array} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechCommitteeCollectiveApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechCommitteeCollective.Approved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was approved by the required threshold.
   * \[proposal_hash\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * A motion was approved by the required threshold.
   * \[proposal_hash\]
   */
  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV1201(): {proposalHash: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechCommitteeCollectiveClosedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechCommitteeCollective.Closed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   * \[proposal_hash, yes, no\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   * \[proposal_hash, yes, no\]
   */
  get asV900(): [Uint8Array, number, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV1201(): {proposalHash: Uint8Array, yes: number, no: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechCommitteeCollectiveDisapprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechCommitteeCollective.Disapproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was not approved by the required threshold.
   * \[proposal_hash\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * A motion was not approved by the required threshold.
   * \[proposal_hash\]
   */
  get asV900(): Uint8Array {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV1201(): {proposalHash: Uint8Array} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechCommitteeCollectiveExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechCommitteeCollective.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Executed') === '019142f0bd31225b17a5d98473d6ee9928b1e71bb401e1e42248abdb9dca92c7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get asV900(): [Uint8Array, Result<null, v900.DispatchError>] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Executed') === '5b848c4d2e38fbfb6752ba650f8662bd0df106f400d22ae305ed497d7574ee03'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1201(): {proposalHash: Uint8Array, result: Result<null, v1201.DispatchError>} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Executed') === '3f97432326c1bc7a1d2b8f8e2b864f870aa8a7a926361a7af32c8e5c45ed9c5e'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1300(): {proposalHash: Uint8Array, result: Result<null, v1300.DispatchError>} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Executed') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1401(): {proposalHash: Uint8Array, result: Result<null, v1401.DispatchError>} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Executed') === '891fd2ad27e5f8bc799d45bb765ef77383902fd4e1cc4c6981cba99123803ac7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1606(): {proposalHash: Uint8Array, result: Result<null, v1606.DispatchError>} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechCommitteeCollectiveMemberExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechCommitteeCollective.MemberExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.MemberExecuted') === '019142f0bd31225b17a5d98473d6ee9928b1e71bb401e1e42248abdb9dca92c7'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get asV900(): [Uint8Array, Result<null, v900.DispatchError>] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.MemberExecuted') === '5b848c4d2e38fbfb6752ba650f8662bd0df106f400d22ae305ed497d7574ee03'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV1201(): {proposalHash: Uint8Array, result: Result<null, v1201.DispatchError>} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.MemberExecuted') === '3f97432326c1bc7a1d2b8f8e2b864f870aa8a7a926361a7af32c8e5c45ed9c5e'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV1300(): {proposalHash: Uint8Array, result: Result<null, v1300.DispatchError>} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.MemberExecuted') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV1401(): {proposalHash: Uint8Array, result: Result<null, v1401.DispatchError>} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.MemberExecuted') === '891fd2ad27e5f8bc799d45bb765ef77383902fd4e1cc4c6981cba99123803ac7'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV1606(): {proposalHash: Uint8Array, result: Result<null, v1606.DispatchError>} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechCommitteeCollectiveProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechCommitteeCollective.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   * \[account, proposal_index, proposal_hash, threshold\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Proposed') === 'a613c04c45835d6c8d0d8935013395b895fbdea266e8525d81b3e176c482215c'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   * \[account, proposal_index, proposal_hash, threshold\]
   */
  get asV900(): [Uint8Array, number, Uint8Array, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Proposed') === '2f562f77da96c6e9d914e5ea299d49ccdf6e5f2ac7298893761b08e64df38909'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV1201(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechCommitteeCollectiveVotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechCommitteeCollective.Voted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   * \[account, proposal_hash, voted, yes, no\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Voted') === '6ebdb08adf34a07ba1fe77ab63c9bbeeb0196f65844713e59a373a8e8b2527f0'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   * \[account, proposal_hash, voted, yes, no\]
   */
  get asV900(): [Uint8Array, Uint8Array, boolean, number, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Voted') === '21c6fc995cdece31f27f75fd29db36311e324efedc01dd968dcf754af1904de9'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV1201(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryAwardedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Awarded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Treasury.Awarded') === '1ca1bbccad98d48e2621a47ca30161714034e352019415514ef1338743ce0fd8'
  }

  /**
   * Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get asV900(): [number, bigint, Uint8Array] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some funds have been allocated.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Treasury.Awarded') === '6f95fbb8a91e310ee6d32f9a9933578e41f325c1506fac22a1f57925002cd904'
  }

  /**
   * Some funds have been allocated.
   */
  get asV1300(): {proposalIndex: number, award: bigint, account: Uint8Array} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryBurntEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Burnt')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some of our funds have been burnt. \[burn\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Treasury.Burnt') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
  }

  /**
   * Some of our funds have been burnt. \[burn\]
   */
  get asV900(): bigint {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some of our funds have been burnt.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Treasury.Burnt') === '9d1d11cb2e24085666bf949195a4030bd6e80ff41274d0386073977e7cd59a87'
  }

  /**
   * Some of our funds have been burnt.
   */
  get asV1300(): {burntFunds: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryDepositEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Deposit')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some funds have been deposited. \[deposit\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Treasury.Deposit') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
  }

  /**
   * Some funds have been deposited. \[deposit\]
   */
  get asV900(): bigint {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some funds have been deposited.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Treasury.Deposit') === 'd74027ad27459f17d7446fef449271d1b0dc12b852c175623e871d009a661493'
  }

  /**
   * Some funds have been deposited.
   */
  get asV1300(): {value: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New proposal. \[proposal_index\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Treasury.Proposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * New proposal. \[proposal_index\]
   */
  get asV900(): number {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * New proposal.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
  }

  /**
   * New proposal.
   */
  get asV1300(): {proposalIndex: number} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryRejectedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Rejected')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Treasury.Rejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get asV900(): [number, bigint] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get asV1300(): {proposalIndex: number, slashed: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryRolloverEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Rollover')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Spending has finished; this is the amount that rolls over until next spend.
   * \[budget_remaining\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Treasury.Rollover') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
  }

  /**
   * Spending has finished; this is the amount that rolls over until next spend.
   * \[budget_remaining\]
   */
  get asV900(): bigint {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Spending has finished; this is the amount that rolls over until next spend.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Treasury.Rollover') === 'c9e720e2b3ada12c617b4dcb70771c3afafb9e294bf362df01a9e129683a92dd'
  }

  /**
   * Spending has finished; this is the amount that rolls over until next spend.
   */
  get asV1300(): {rolloverBalance: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasurySpendingEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Spending')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * We have ended a spend period and will now allocate funds. \[budget_remaining\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Treasury.Spending') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
  }

  /**
   * We have ended a spend period and will now allocate funds. \[budget_remaining\]
   */
  get asV900(): bigint {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * We have ended a spend period and will now allocate funds.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Treasury.Spending') === 'b9f599ccbbe2e4fd1004f47546e1a3100bc78745b24ac47ac03ed16ca6266290'
  }

  /**
   * We have ended a spend period and will now allocate funds.
   */
  get asV1300(): {budgetRemaining: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityBatchCompletedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.BatchCompleted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Batch of dispatches completed fully with no error.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Utility.BatchCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Batch of dispatches completed fully with no error.
   */
  get asV900(): null {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityBatchCompletedWithErrorsEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.BatchCompletedWithErrors')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Batch of dispatches completed but has errors.
   */
  get isV1701(): boolean {
    return this._chain.getEventHash('Utility.BatchCompletedWithErrors') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Batch of dispatches completed but has errors.
   */
  get asV1701(): null {
    assert(this.isV1701)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityBatchInterruptedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.BatchInterrupted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error. \[index, error\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Utility.BatchInterrupted') === 'b9192854e3b1d8b7a3bd93b66a170a2afd8616d353d0fc1bdbfbfe6efa5b4f5a'
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error. \[index, error\]
   */
  get asV900(): [number, v900.DispatchError] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Utility.BatchInterrupted') === '98bdd6e841214fcd4b95ff7b4750fcf3643d9e94f0203582cf6dd5c7dd772c39'
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get asV1201(): {index: number, error: v1201.DispatchError} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Utility.BatchInterrupted') === '0ebef0e669872b029afc6cbf6c35a90ca099164a7899375e3d8178345c0f3f73'
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get asV1300(): {index: number, error: v1300.DispatchError} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('Utility.BatchInterrupted') === '8676c6dc6a22410c7ddbc9f34f71e25e9bc1f7237c98ea59385020ce26129067'
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get asV1401(): {index: number, error: v1401.DispatchError} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('Utility.BatchInterrupted') === '30bda593b1e7b041ebb6b79df0135b12bf0ecdbea3d7694f8d9d59560411df93'
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get asV1606(): {index: number, error: v1606.DispatchError} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityDispatchedAsEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.DispatchedAs')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A call was dispatched. \[result\]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Utility.DispatchedAs') === 'ab888611b1630e8ada6ae91aa73bbcaa3417be141a0a0db92f4f509e4cfba02a'
  }

  /**
   * A call was dispatched. \[result\]
   */
  get asV1201(): Result<null, v1201.DispatchError> {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A call was dispatched.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Utility.DispatchedAs') === 'a5f93f40c8dbc0e7785a5800c0344513f6a8b6a6a0394b0938320dec7e44be85'
  }

  /**
   * A call was dispatched.
   */
  get asV1300(): {result: Result<null, v1300.DispatchError>} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A call was dispatched.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('Utility.DispatchedAs') === '437b0d6b61f01d02ca149f7d3a9e00406fc26ecde780532ed80e532801995307'
  }

  /**
   * A call was dispatched.
   */
  get asV1401(): {result: Result<null, v1401.DispatchError>} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A call was dispatched.
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('Utility.DispatchedAs') === 'cbb13e6f8f0e2a0b00b89705f05de04cf34bbb44653bcdccedddc8448bc95bfc'
  }

  /**
   * A call was dispatched.
   */
  get asV1606(): {result: Result<null, v1606.DispatchError>} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityItemCompletedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.ItemCompleted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A single item within a Batch of dispatches has completed with no error.
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Utility.ItemCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * A single item within a Batch of dispatches has completed with no error.
   */
  get asV900(): null {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityItemFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.ItemFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A single item within a Batch of dispatches has completed with error.
   */
  get isV1701(): boolean {
    return this._chain.getEventHash('Utility.ItemFailed') === '59e964849fe0837c16b04e3c81782ce0ee22b9efe3d6a8d43d6ea61e9b25b998'
  }

  /**
   * A single item within a Batch of dispatches has completed with error.
   */
  get asV1701(): {error: v1701.DispatchError} {
    assert(this.isV1701)
    return this._chain.decodeEvent(this.event)
  }
}

export class XTokensTransferredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XTokens.Transferred')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transferred. \[sender, currency_id, amount, dest\]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('XTokens.Transferred') === '0b1f64fdbe98f4991b0526cf2880340c383744c30f7427682cf2ac13ca10c132'
  }

  /**
   * Transferred. \[sender, currency_id, amount, dest\]
   */
  get asV1201(): [Uint8Array, v1201.CurrencyId, bigint, v1201.V1MultiLocation] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transferred.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('XTokens.Transferred') === '6974067fb4607c172dd660bbcb7bd9c27f5a0b651c8c72bf067fbcc1717d5796'
  }

  /**
   * Transferred.
   */
  get asV1300(): {sender: Uint8Array, currencyId: v1300.CurrencyId, amount: bigint, dest: v1300.V1MultiLocation} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class XTokensTransferredMultiAssetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XTokens.TransferredMultiAsset')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transferred `MultiAsset`. \[sender, asset, dest\]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('XTokens.TransferredMultiAsset') === 'e054281198c197ead860808419b2fed078a4b0770f98e35ff1e0a19b435d1390'
  }

  /**
   * Transferred `MultiAsset`. \[sender, asset, dest\]
   */
  get asV1201(): [Uint8Array, v1201.V1MultiAsset, v1201.V1MultiLocation] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transferred `MultiAsset`.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('XTokens.TransferredMultiAsset') === '194d429a2acf3e96db2dcd633b6e8ffb0207693a9d537bf69358f93d4401802b'
  }

  /**
   * Transferred `MultiAsset`.
   */
  get asV1300(): {sender: Uint8Array, asset: v1300.V1MultiAsset, dest: v1300.V1MultiLocation} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class XTokensTransferredMultiAssetWithFeeEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XTokens.TransferredMultiAssetWithFee')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transferred `MultiAsset` with fee. \[sender, asset, fee, dest\]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('XTokens.TransferredMultiAssetWithFee') === '44e1ae66614077a4b66c332b909505952455e13fd4d47b51ccf328013382f988'
  }

  /**
   * Transferred `MultiAsset` with fee. \[sender, asset, fee, dest\]
   */
  get asV1201(): [Uint8Array, v1201.V1MultiAsset, v1201.V1MultiAsset, v1201.V1MultiLocation] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('XTokens.TransferredMultiAssetWithFee') === '771a67e03a292739a0431803b4326faddec67ed77f8416495a0b58a2317963f4'
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get asV1300(): {sender: Uint8Array, asset: v1300.V1MultiAsset, fee: v1300.V1MultiAsset, dest: v1300.V1MultiLocation} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class XTokensTransferredMultiAssetsEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XTokens.TransferredMultiAssets')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('XTokens.TransferredMultiAssets') === '627fd7f5468f3c25280e18c4c1f32304bcdfba6900ac9f1c2b6ad0a43392f878'
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get asV1300(): {sender: Uint8Array, assets: v1300.V1MultiAsset[], dest: v1300.V1MultiLocation} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('XTokens.TransferredMultiAssets') === '854ee56dafc84c13da32ba254e83581770f5bd45dfc01d7be320dcb44f605ca6'
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get asV1401(): {sender: Uint8Array, assets: v1401.V1MultiAsset[], fee: v1401.V1MultiAsset, dest: v1401.V1MultiLocation} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class XTokensTransferredMultiCurrenciesEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XTokens.TransferredMultiCurrencies')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('XTokens.TransferredMultiCurrencies') === 'fa9e419250bd07efbf28e10e149cdf0f1f4b45a37392e10a721c2005b1ed63fa'
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get asV1300(): {sender: Uint8Array, currencies: [v1300.CurrencyId, bigint][], dest: v1300.V1MultiLocation} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class XTokensTransferredWithFeeEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XTokens.TransferredWithFee')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transferred with fee. \[sender, currency_id, amount, fee, dest\]
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('XTokens.TransferredWithFee') === '4c990ce581c424736afda696e525804e46e14e9730596238a3ca263138cb412e'
  }

  /**
   * Transferred with fee. \[sender, currency_id, amount, fee, dest\]
   */
  get asV1201(): [Uint8Array, v1201.CurrencyId, bigint, bigint, v1201.V1MultiLocation] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transferred with fee.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('XTokens.TransferredWithFee') === '4d29d86c54290e6aebc50b8c765526f71f9f7abbe7586fe42dc170a0585d268c'
  }

  /**
   * Transferred with fee.
   */
  get asV1300(): {sender: Uint8Array, currencyId: v1300.CurrencyId, amount: bigint, fee: bigint, dest: v1300.V1MultiLocation} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmTransactorDeRegisteredDerivativeEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmTransactor.DeRegisteredDerivative')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1401(): boolean {
    return this._chain.getEventHash('XcmTransactor.DeRegisteredDerivative') === '053daa6536b598f0aa27368ea681761daeadb01c00bc0f60a6fe5f7255582db4'
  }

  get asV1401(): {index: number} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmTransactorDestFeePerSecondChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmTransactor.DestFeePerSecondChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Set dest fee per second
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('XcmTransactor.DestFeePerSecondChanged') === '4e6de2202a4da27339f490b023b53d4f95d0f3edc01398b330235c9f41b9b1f9'
  }

  /**
   * Set dest fee per second
   */
  get asV1606(): {location: v1606.V1MultiLocation, feePerSecond: bigint} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmTransactorDestFeePerSecondRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmTransactor.DestFeePerSecondRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Remove dest fee per second
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('XcmTransactor.DestFeePerSecondRemoved') === 'c5717b66288d312f2406466ab5ee8d79ba1aceedc50e60e0ce2a16ba6828727f'
  }

  /**
   * Remove dest fee per second
   */
  get asV1606(): {location: v1606.V1MultiLocation} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmTransactorRegisterdDerivativeEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmTransactor.RegisterdDerivative')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1201(): boolean {
    return this._chain.getEventHash('XcmTransactor.RegisterdDerivative') === '541a75cc9fdc5d2fddc4420ef4485ca01a19c26bc7009e44a569447549bf349d'
  }

  get asV1201(): [Uint8Array, number] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Registered a derivative index for an account id.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('XcmTransactor.RegisterdDerivative') === 'b66bdf1e6069c87252697604487d8d9c9a1711e9fb6e49113afe161e804061ec'
  }

  /**
   * Registered a derivative index for an account id.
   */
  get asV1300(): {accountId: Uint8Array, index: number} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmTransactorRegisteredDerivativeEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmTransactor.RegisteredDerivative')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Registered a derivative index for an account id.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('XcmTransactor.RegisteredDerivative') === 'b66bdf1e6069c87252697604487d8d9c9a1711e9fb6e49113afe161e804061ec'
  }

  /**
   * Registered a derivative index for an account id.
   */
  get asV1401(): {accountId: Uint8Array, index: number} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmTransactorTransactFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmTransactor.TransactFailed')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1201(): boolean {
    return this._chain.getEventHash('XcmTransactor.TransactFailed') === '656bcaacb6094ee3ae2abd0f2c7b21d22b1008ef1eb17f5f8eb6af1b5da8cf44'
  }

  get asV1201(): v1201.V2Error {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transact failed
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('XcmTransactor.TransactFailed') === '19945a716124e39e70dfc8a8cc294abd226c412ae64551124e7c330f953f5d9c'
  }

  /**
   * Transact failed
   */
  get asV1300(): {error: v1300.V2Error} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmTransactorTransactInfoChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmTransactor.TransactInfoChanged')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1201(): boolean {
    return this._chain.getEventHash('XcmTransactor.TransactInfoChanged') === 'af805af2618e0357ee31b1d7c6e042efad73802da67d2901aab5b29e03367ec7'
  }

  get asV1201(): [v1201.V1MultiLocation, v1201.RemoteTransactInfoWithMaxWeight] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Changed the transact info of a location
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('XcmTransactor.TransactInfoChanged') === '2f7189da060ee0b12ae76a1c6c88139705fff819f1e0835e8ed04010ac0519e8'
  }

  /**
   * Changed the transact info of a location
   */
  get asV1300(): {location: v1300.V1MultiLocation, remoteInfo: v1300.RemoteTransactInfoWithMaxWeight} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Changed the transact info of a location
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('XcmTransactor.TransactInfoChanged') === '1022857027b7884880f9cf454dad26d73ac3ea9d5b432574d2581599324d3316'
  }

  /**
   * Changed the transact info of a location
   */
  get asV1606(): {location: v1606.V1MultiLocation, remoteInfo: v1606.RemoteTransactInfoWithMaxWeight} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmTransactorTransactInfoRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmTransactor.TransactInfoRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Removed the transact info of a location
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('XcmTransactor.TransactInfoRemoved') === 'c5717b66288d312f2406466ab5ee8d79ba1aceedc50e60e0ce2a16ba6828727f'
  }

  /**
   * Removed the transact info of a location
   */
  get asV1401(): {location: v1401.V1MultiLocation} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmTransactorTransactedDerivativeEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmTransactor.TransactedDerivative')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1201(): boolean {
    return this._chain.getEventHash('XcmTransactor.TransactedDerivative') === 'e6980f2c19c3830a2bf3e4ceb131649249e894fb0a74994970099aeb4403877b'
  }

  get asV1201(): [Uint8Array, v1201.V1MultiLocation, Uint8Array, number] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transacted the inner call through a derivative account in a destination chain.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('XcmTransactor.TransactedDerivative') === 'ae03965a1dbf8c002720f57d0d7d125bce4f8c95d4a8b034541191b137fd72a3'
  }

  /**
   * Transacted the inner call through a derivative account in a destination chain.
   */
  get asV1300(): {accountId: Uint8Array, dest: v1300.V1MultiLocation, call: Uint8Array, index: number} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmTransactorTransactedSignedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmTransactor.TransactedSigned')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transacted the call through a signed account in a destination chain.
   */
  get isV1606(): boolean {
    return this._chain.getEventHash('XcmTransactor.TransactedSigned') === '59f08878d703ebd4afe407c7d6ab34b828c48a48b2f2feee93be5dfbf37e7ce9'
  }

  /**
   * Transacted the call through a signed account in a destination chain.
   */
  get asV1606(): {feePayer: Uint8Array, dest: v1606.V1MultiLocation, call: Uint8Array} {
    assert(this.isV1606)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmTransactorTransactedSovereignEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmTransactor.TransactedSovereign')
    this._chain = ctx._chain
    this.event = event
  }

  get isV1201(): boolean {
    return this._chain.getEventHash('XcmTransactor.TransactedSovereign') === 'c65f6c9647831c6243b29bf733793a37ed19265c734353ea336ea344804ae2d0'
  }

  get asV1201(): [Uint8Array, v1201.V1MultiLocation, Uint8Array] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transacted the call through the sovereign account in a destination chain.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('XcmTransactor.TransactedSovereign') === '59f08878d703ebd4afe407c7d6ab34b828c48a48b2f2feee93be5dfbf37e7ce9'
  }

  /**
   * Transacted the call through the sovereign account in a destination chain.
   */
  get asV1300(): {feePayer: Uint8Array, dest: v1300.V1MultiLocation, call: Uint8Array} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueBadFormatEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.BadFormat')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Bad XCM format used.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('XcmpQueue.BadFormat') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * Bad XCM format used.
   */
  get asV1201(): (Uint8Array | undefined) {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueBadVersionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.BadVersion')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Bad XCM version used.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('XcmpQueue.BadVersion') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * Bad XCM version used.
   */
  get asV1201(): (Uint8Array | undefined) {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueFailEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.Fail')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some XCM failed.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('XcmpQueue.Fail') === 'c719d9ccc723cdf668f55966f450e4217391513459d13dcdea1b99c7e22b2890'
  }

  /**
   * Some XCM failed.
   */
  get asV1201(): [(Uint8Array | undefined), v1201.V2Error] {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some XCM failed.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('XcmpQueue.Fail') === '639070abee49a6419e897939fc5b761d561a52efc062a7f1a1183b543e786999'
  }

  /**
   * Some XCM failed.
   */
  get asV1300(): [(Uint8Array | undefined), v1300.V2Error] {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueOverweightEnqueuedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.OverweightEnqueued')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An XCM exceeded the individual message weight budget.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === 'ebfdd28144c52e3beb9a90e53e214e90e6114fc4d52e2c572b7e0a2e8c303bd5'
  }

  /**
   * An XCM exceeded the individual message weight budget.
   */
  get asV1300(): [number, number, bigint, bigint] {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueOverweightServicedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.OverweightServiced')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An XCM from the overweight queue was executed with the given actual weight used.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('XcmpQueue.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
  }

  /**
   * An XCM from the overweight queue was executed with the given actual weight used.
   */
  get asV1300(): [bigint, bigint] {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueSuccessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.Success')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some XCM was executed ok.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('XcmpQueue.Success') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * Some XCM was executed ok.
   */
  get asV1201(): (Uint8Array | undefined) {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueUpwardMessageSentEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.UpwardMessageSent')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An upward message was sent to the relay chain.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('XcmpQueue.UpwardMessageSent') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * An upward message was sent to the relay chain.
   */
  get asV1201(): (Uint8Array | undefined) {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueXcmpMessageSentEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.XcmpMessageSent')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An HRMP message was sent to a sibling parachain.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('XcmpQueue.XcmpMessageSent') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * An HRMP message was sent to a sibling parachain.
   */
  get asV1201(): (Uint8Array | undefined) {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }
}
