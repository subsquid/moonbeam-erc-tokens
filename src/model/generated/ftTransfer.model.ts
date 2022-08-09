import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {TransferType} from "./_transferType"
import {FToken} from "./fToken.model"

@Entity_()
export class FtTransfer {
  constructor(props?: Partial<FtTransfer>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  blockNumber!: bigint

  @Column_("timestamp with time zone", {nullable: false})
  timestamp!: Date

  @Column_("int4", {nullable: false})
  eventIndex!: number

  @Column_("text", {nullable: false})
  txnHash!: string

  @Index_()
  @ManyToOne_(() => Account, {nullable: false})
  from!: Account

  @Index_()
  @ManyToOne_(() => Account, {nullable: false})
  to!: Account

  @Index_()
  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  amount!: bigint | undefined | null

  @Index_()
  @Column_("varchar", {length: 8, nullable: true})
  transferType!: TransferType | undefined | null

  @Index_()
  @ManyToOne_(() => FToken, {nullable: false})
  token!: FToken
}
