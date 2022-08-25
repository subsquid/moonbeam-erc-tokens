import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {FToken} from "./fToken.model"

@Entity_()
export class AccountFTokenBalance {
  constructor(props?: Partial<AccountFTokenBalance>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Account, {nullable: false})
  account!: Account

  @Index_()
  @ManyToOne_(() => FToken, {nullable: false})
  token!: FToken

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  amount!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  updatedAtBlock!: bigint

  @Column_("timestamp with time zone", {nullable: false})
  updatedAt!: Date
}
