import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {Transfer} from "./transfer.model"

@Entity_()
export class Account {
  constructor(props?: Partial<Account>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("int4", {nullable: false})
  transfersTotalCount!: number

  @OneToMany_(() => Transfer, e => e.from)
  transfersSent!: Transfer[]

  @Column_("int4", {nullable: false})
  transfersSentCount!: number

  @OneToMany_(() => Transfer, e => e.to)
  transfersReceived!: Transfer[]

  @Column_("int4", {nullable: false})
  transfersReceivedCount!: number
}
