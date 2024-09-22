/* eslint-disable */
// @ts-nocheck

const Form = defineComponent({
  setup() {
    const searchForm = ref({})
    const formItems = [
      ['姓名', 'name'],
      ['年龄', 'age'],
      ['性别', 'gender', { type: 'text' }],
    ]

    return () => (
      <Form
        data={searchForm.value}
        items={formItems}
        itemDefault={{ type: 'text' }}
        onSubmit={() => onSearch(true)}
        onReset={onReset}
        onChange={(path, value) => set(searchForm.value, path, value)}
      />
    )
  }
})

function set(obj, path, value) {
  if (isNil(obj[path])) return
  obj[path] = value
}

function get(obj, path, defaultValue = null) {
  return obj?.[path] ?? defaultValue
}

/* eslint-enable */