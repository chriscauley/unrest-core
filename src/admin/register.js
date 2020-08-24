const models = []
const model_map = {}

const register = (model) => {
  const { model_name } = model
  if (model_map[model_name]) {
    throw `Model "${model_name}" is already registered`
  }
  models.push(model)
  model_map[model_name] = model
}

Object.assign(register, {
  models,
  getModel: (model_name) => model_map[model_name],
})

export default register
