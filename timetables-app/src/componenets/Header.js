import { getFormatedDate } from '../helper'
import React from 'react';

export function Header(){
    return (
      <div>
        <span>{getFormatedDate(new Date())}</span>
      </div>
    )
  }