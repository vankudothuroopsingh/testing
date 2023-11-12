import './netflix-header.css';

export function NextflixHeader()
{
     return(
        <header className="p-4 text-white d-flex justify-content-between">
            <div>
                <span className="brand-title">NETFLIX</span>
            </div>
            <div className="d-flex">
                <div className="input-group">
                <span className="bi bi-translate input-group-text"></span>
                <select className="form-select">
                    <option>Language</option>
                    <option>English</option>
                </select>
                </div>
                <button className="btn btn-danger ms-3">Signin</button>
            </div>
        </header>
     )
}