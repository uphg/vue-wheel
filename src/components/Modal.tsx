/* eslint-disable */
// @ts-nocheck

const Modal = defineComponent({
  setup() {
    const [modalVisible, toggleModal] = useBool(false)

    const render = () => (
      <Modal
        title="新增"
        visible={modalVisible.value}
        onConfirm={onSubmit}
        onCancel={toggleModal}
      >
        <Form
          data={searchForm.value}
          items={formItems}
          itemDefault={{ type: 'text' }}
          onReset={onReset}
          onChange={(path, value) => set(searchForm.value, path, value)}
        />
      </Modal>
    )

    function open(type, data) {
      searchForm.value = data
      toggleModal()
    }

    return [render, open]
  }
})

function useBool(initialValue = false) {
  const [value, setValue] = useState(initialValue)
  const toggle = () => setValue(!value)
  const set = (v) => setValue(v)
  return [value, toggle, set]
}

/* eslint-enable */