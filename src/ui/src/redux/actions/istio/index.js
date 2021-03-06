// Copyright 2018 Naftis Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import axios from '../../../commons/axios'

const TYPE = {
  DIAGNOSIS_DATA: 'DIAGNOSIS_DATA'
}

const getDiagnosisDataAjax = (username) => {
  return dispatch => {
    axios.getAjax({
      url: 'api/diagnose',
      type: 'GET',
      data: {}
    }).then(response => {
      if (response.code === 0) {
        dispatch({
          type: TYPE.DIAGNOSIS_DATA,
          payload: response.data
        })
      }
    })
  }
}

export {
  getDiagnosisDataAjax,
  TYPE
}
