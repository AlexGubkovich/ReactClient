import { getFormatedDate } from '../helper'

export function Header(){
    return (
      <div>
        <span>{getFormatedDate()}</span>
      </div>
    )
  }