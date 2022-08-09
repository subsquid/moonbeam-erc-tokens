import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {ContractStandard} from "./_contractStandard"
import {NfToken} from "./nfToken.model"

@Entity_()
export class Collection {
  constructor(props?: Partial<Collection>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @Column_("varchar", {length: 7, nullable: false})
  collectionType!: ContractStandard

  @OneToMany_(() => NfToken, e => e.collection)
  nfts!: NfToken[]

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  createdAtBlock!: bigint

  @Column_("timestamp with time zone", {nullable: false})
  createdAt!: Date
}
