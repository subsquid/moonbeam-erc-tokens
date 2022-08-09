import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {NfToken} from "./nfToken.model"

@Entity_()
export class UriUpdateAction {
  constructor(props?: Partial<UriUpdateAction>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => NfToken, {nullable: false})
  token!: NfToken

  @Column_("text", {nullable: true})
  newValue!: string | undefined | null

  @Column_("text", {nullable: true})
  oldValue!: string | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  blockNumber!: bigint

  @Column_("timestamp with time zone", {nullable: false})
  timestamp!: Date

  @Column_("text", {nullable: false})
  txnHash!: string
}
