import createMultiTabState from 'vuex-multi-tab-state'

export default ({ store }) => {
  createMultiTabState(
    {
        statesPaths: ['coords']
    }
  )(store)
}