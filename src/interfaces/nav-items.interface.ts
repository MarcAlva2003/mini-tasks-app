import React from "react"

export interface INavSubitem {
  key: string,
  name: string,
  link: string,
  icon?: React.ReactNode,
}

export interface INavItem {
  key: string,
  name: string,
  link: string,
  subitems: INavSubitem [],
  icon?: React.ReactNode,
  isUnfolded: boolean
}