import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import {ContractStandard} from "./_contractStandard"

@Entity_()
export class Token {
  constructor(props?: Partial<Token>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: false})
  name!: string

  @Column_("text", {nullable: false})
  symbol!: string

  @Column_("int4", {nullable: true})
  decimals!: number | undefined | null

  @Column_("varchar", {length: 6, nullable: true})
  contractStandard!: ContractStandard | undefined | null

  @Column_("text", {nullable: false})
  contractAddress!: string
}
