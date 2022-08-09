import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {AccountFtTransfer} from "./accountFtTransfer.model"
import {AccountNftTransfer} from "./accountNftTransfer.model"
import {NfToken} from "./nfToken.model"

@Entity_()
export class Account {
  constructor(props?: Partial<Account>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @OneToMany_(() => AccountFtTransfer, e => e.account)
  ftTransfers!: AccountFtTransfer[]

  @OneToMany_(() => AccountNftTransfer, e => e.account)
  nftTransfers!: AccountNftTransfer[]

  @OneToMany_(() => NfToken, e => e.currentOwner)
  ownedTokens!: NfToken[]
}
