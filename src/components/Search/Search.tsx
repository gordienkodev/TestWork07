import styles from './Search.module.scss'

export const Search = () => {
  return (
    <div
      className={`${styles.custom_styles} w-100 p-4 d-flex flex-column text-center align-items-center justify-content-center px-md-5 rounded shadow-lg`}
    >
      <h1>Weather Forecast</h1>
      <form className="container-fluid">
        <div className="input-group">
          <input className={`form-control ${styles.search_input}`} />
          <button className={`btn ${styles.custom_btn}`} type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
