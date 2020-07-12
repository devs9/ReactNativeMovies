import {IFetchRequest} from './ts'

export const fetchRequest = async (url: string, requestInit?: IFetchRequest) => {
  try {
    const apiCall = await fetch(url, {
      method: requestInit?.method || 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestInit?.body)
    })

    return await apiCall.json()
  } catch (error) {
    console.error('🔥 REQUEST ERROR!', error, '🔥')
  }
}
