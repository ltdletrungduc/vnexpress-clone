export const payloadCreator = asyncFunction => async (arg, thunkAPI) => {
  try {
    const resonse = await asyncFunction(arg)
    return resonse
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
}

export const generatePostId = ({ title, id }) => {
  return encodeURIComponent(
    `${title.replace(/\s/g, '-').replace(/%/g, '')}-post.${id} `
  )
}

export const getIdPostFromURL = url => {
  const arr = url.split('-post.')
  return arr[arr.length - 1]
}
