import Image from 'next/image';
export default function Classification({ data, width }) {
  return (
    <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
      <div className="relative h-full p-4 space-y-2 overflow-hidden text-black bg-gray-300 border border-gray-400 rounded-md shadow-lg dark:text-gray-300 dark:border-gray-800 dark:bg-gray-900">
        <div className="bg"></div>
        {/* <Image
          src="/boxes/Classification.png"
          height={1600}
          width={600}
          alt="alt"
          className="absolute top-0 left-0 w-full h-full -z-10 opacity-20"
        /> */}
        <div className="z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 405.544 405.544"
            xmlSpace="preserve"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
              {' '}
              <g>
                {' '}
                <path
                  style={{ fill: '#F95428' }}
                  d="M397.995,221.931c0.63,6.37-4.43,11.88-10.82,11.88h-71.8h-69.58h-49.9h-21.9 c-6.4,0-11.45-5.51-10.82-11.88c1.35-13.54,5-26.42,10.55-38.22c17.33-36.9,53.21-63.37,95.63-67.37c3.7-0.35,7.44-0.53,11.23-0.53 C341.745,115.811,392.035,162.341,397.995,221.931z"
                />{' '}
                <path
                  style={{ fill: '#E54728' }}
                  d="M207.842,221.931c1.35-13.54,5-26.42,10.55-38.22c15.8-33.641,47.021-58.604,84.556-65.784 c-7.241-1.389-14.717-2.116-22.363-2.116c-3.79,0-7.53,0.18-11.23,0.53c-42.42,4-78.3,30.47-95.63,67.37 c-5.55,11.8-9.2,24.68-10.55,38.22c-0.63,6.37,4.42,11.88,10.82,11.88h21.9h22.767 C212.262,233.811,207.212,228.301,207.842,221.931z"
                />{' '}
                <path
                  style={{ fill: '#F95428' }}
                  d="M146.745,43.831c52.83,0,98.81,29.29,122.61,72.51c-42.42,4-78.3,30.47-95.63,67.37h-75.39h-77.94 c-7.59,0-13.59-6.53-12.83-14.08C14.625,98.991,74.245,43.831,146.745,43.831z"
                />{' '}
                <path
                  style={{ fill: '#E54728' }}
                  d="M62.232,169.631C68.38,108.116,114.389,58.347,174.05,46.514 c-8.833-1.748-17.959-2.683-27.305-2.683c-72.5,0-132.12,55.16-139.18,125.8c-0.76,7.55,5.24,14.08,12.83,14.08h54.667 C67.472,183.711,61.472,177.181,62.232,169.631z"
                />{' '}
                <path
                  style={{ fill: '#F7B239' }}
                  d="M204.045,289.821c1.02,4.46,1.5,8.89,1.5,13.24c0,31.55-25.62,58.65-58.8,58.65 c-37.75,0-65.72-35.09-57.3-71.89c2.95-12.9,5.18-25.94,6.67-39.08c1.47-13.12,2.22-26.34,2.22-39.58v-26.77v-0.68h75.39 c-5.55,11.8-9.2,24.68-10.55,38.22c-0.63,6.37,4.42,11.88,10.82,11.88h21.9C197.095,252.661,199.825,271.391,204.045,289.821z"
                />{' '}
                <path
                  style={{ fill: '#E09B2D' }}
                  d="M114.945,289.821c2.95-12.9,5.18-25.94,6.67-39.08c1.47-13.12,2.22-26.34,2.22-39.58v-26.77v-0.68 h-25.5v0.68v26.77c0,13.24-0.75,26.46-2.22,39.58c-1.49,13.14-3.72,26.18-6.67,39.08c-8.42,36.8,19.55,71.89,57.3,71.89 c4.404,0,8.669-0.49,12.764-1.392C128.484,353.5,107.505,322.337,114.945,289.821z"
                />{' '}
                <path
                  style={{ fill: '#F7B239' }}
                  d="M321.755,310.051c0.73,3.21,1.08,6.39,1.08,9.52c0,22.67-18.41,42.14-42.25,42.14 c-27.13,0-47.23-25.21-41.17-51.66c2.12-9.27,3.72-18.64,4.79-28.08c1.06-9.43,1.59-18.92,1.59-28.44v-19.23v-0.49h69.58v19.72 C315.375,272.561,317.515,291.511,321.755,310.051z"
                />{' '}
                <path
                  style={{ fill: '#E09B2D' }}
                  d="M260.915,310.051c2.12-9.27,3.72-18.64,4.79-28.08c1.06-9.43,1.59-18.92,1.59-28.44v-19.23v-0.49 h-21.5v0.49v19.23c0,9.52-0.53,19.01-1.59,28.44c-1.07,9.44-2.67,18.81-4.79,28.08c-6.06,26.45,14.04,51.66,41.17,51.66 c3.744,0,7.354-0.481,10.779-1.379C269.936,354.75,255.687,332.87,260.915,310.051z"
                />{' '}
                <path
                  style={{ fill: '#FFFFFF' }}
                  d="M167.949,336.752c-2.194,0-4.369-0.958-5.851-2.801c-2.595-3.229-2.082-7.949,1.147-10.544 c6.228-5.006,9.799-12.422,9.799-20.345c0-1.999-0.229-4.016-0.682-5.995c-3.185-13.908-5.619-28.168-7.234-42.384 c-0.468-4.116,2.49-7.831,6.605-8.299c4.117-0.465,7.831,2.49,8.299,6.605c1.552,13.661,3.892,27.365,6.952,40.732 c0.704,3.077,1.06,6.218,1.06,9.34c0,12.491-5.614,24.168-15.402,32.036C171.258,336.21,169.598,336.752,167.949,336.752z"
                />{' '}
                <path
                  style={{ fill: '#FFFFFF' }}
                  d="M233.938,116.404c-2.111,0-4.209-0.886-5.693-2.614c-15.075-17.552-35.808-29.961-58.379-34.942 c-4.045-0.893-6.6-4.895-5.708-8.94c0.892-4.045,4.894-6.6,8.94-5.708c25.722,5.676,49.348,19.816,66.525,39.816 c2.699,3.142,2.339,7.877-0.803,10.576C237.406,115.809,235.667,116.404,233.938,116.404z"
                />{' '}
                <path
                  style={{ fill: '#FFFFFF' }}
                  d="M291.661,340.225c-2.125,0-4.237-0.898-5.72-2.645c-2.682-3.157-2.296-7.89,0.861-10.572 c2.179-1.851,3.533-4.7,3.533-7.437c0-0.745-0.091-1.523-0.271-2.313c-4.03-17.626-6.393-35.758-7.019-53.881 c-0.143-4.14,3.097-7.612,7.237-7.755c4.12-0.136,7.611,3.096,7.754,7.237c0.593,17.174,2.832,34.354,6.652,51.064 c0.43,1.888,0.646,3.786,0.646,5.648c0,7.124-3.298,14.178-8.823,18.87C295.102,339.639,293.377,340.225,291.661,340.225z"
                />{' '}
                <path
                  style={{ fill: '#FFFFFF' }}
                  d="M370.186,216.313c-3.283,0-6.297-2.173-7.221-5.49c-4.305-15.461-12.899-29.384-24.852-40.264 c-10.028-9.128-22.226-15.807-35.274-19.316c-4-1.075-6.371-5.19-5.295-9.19c1.075-4,5.191-6.371,9.19-5.295 c15.347,4.126,29.689,11.979,41.477,22.708c14.043,12.782,24.142,29.15,29.205,47.333c1.111,3.99-1.223,8.126-5.213,9.237 C371.529,216.224,370.852,216.313,370.186,216.313z"
                />{' '}
                <path
                  style={{ fill: '#333333' }}
                  d="M405.454,221.189c-3.078-30.801-17.431-59.287-40.416-80.209 c-23.143-21.066-53.136-32.668-84.454-32.668c-2.366,0-4.723,0.074-7.072,0.206c-26.525-44.649-74.654-72.186-126.77-72.186 c-36.778,0-72,13.625-99.179,38.364c-26.993,24.571-43.85,58.021-47.464,94.185c-0.571,5.674,1.302,11.362,5.14,15.605 c3.866,4.275,9.389,6.726,15.153,6.726h70.44v19.95c0,12.837-0.731,25.873-2.172,38.735c-1.448,12.77-3.645,25.641-6.529,38.252 c-4.525,19.778,0.133,40.222,12.781,56.092c12.648,15.87,31.54,24.971,51.83,24.971c36.558,0,66.3-29.675,66.3-66.15 c0-4.995-0.568-10.012-1.689-14.914c-3.527-15.403-5.991-31.123-7.364-46.839h34.309v12.225c0,9.187-0.521,18.473-1.55,27.596 c-1.034,9.124-2.597,18.293-4.646,27.251c-3.398,14.841,0.096,30.183,9.585,42.091c9.491,11.91,23.668,18.741,38.896,18.741 c27.434,0,49.752-22.27,49.752-49.643c0-3.747-0.428-7.512-1.271-11.189c-4.11-17.951-6.195-36.404-6.195-54.847v-12.225h64.299 c5.188,0,10.162-2.207,13.644-6.054C404.274,231.431,405.966,226.305,405.454,221.189z M16.365,174.424 c-0.587-0.649-1.542-2.037-1.339-4.046c3.246-32.476,18.387-62.517,42.636-84.59c24.41-22.219,56.046-34.456,89.082-34.456 c44.568,0,85.881,22.434,110.304,59.198c-22.588,4.296-43.658,14.739-60.917,30.45c-11.161,10.16-20.28,22.106-27.067,35.232 H20.393C18.296,176.212,16.969,175.092,16.365,174.424z M196.732,291.494c0.87,3.804,1.311,7.696,1.311,11.568 c0,28.204-23.013,51.15-51.3,51.15c-15.697,0-30.313-7.042-40.1-19.321c-9.786-12.278-13.39-28.095-9.889-43.398 c3.008-13.156,5.299-26.582,6.812-39.917c1.503-13.425,2.266-27.022,2.266-40.415v-19.95h56.678 c-3.463,9.602-5.766,19.659-6.797,29.978c-0.511,5.115,1.18,10.242,4.64,14.064c3.482,3.848,8.456,6.054,13.644,6.054h14.929 C190.336,258.146,192.955,274.995,196.732,291.494z M314.445,311.731c0.592,2.581,0.892,5.218,0.892,7.838 c0,19.102-15.59,34.643-34.752,34.643c-10.635,0-20.537-4.771-27.165-13.089c-6.628-8.317-9.068-19.031-6.694-29.397 c2.173-9.504,3.831-19.23,4.928-28.912c1.092-9.683,1.645-19.535,1.645-29.281v-12.225h54.572v12.225 C307.871,273.102,310.083,292.681,314.445,311.731z M389.693,225.188c-0.378,0.418-1.209,1.12-2.522,1.12H173.999 c-1.313,0-2.144-0.702-2.522-1.12c-0.365-0.404-0.959-1.266-0.835-2.508c2.708-27.108,15.347-52.184,35.587-70.608 c20.375-18.547,46.782-28.761,74.357-28.761s53.982,10.214,74.357,28.761c20.24,18.424,32.878,43.5,35.587,70.608 C390.653,223.923,390.058,224.785,389.693,225.188z"
                />{' '}
                <circle style={{ fill: '#FFFFFF' }} cx="146.745" cy="68.835" r="7.5" />{' '}
                <circle style={{ fill: '#FFFFFF' }} cx="280.585" cy="140.811" r="7.5" />{' '}
              </g>{' '}
            </g>
          </svg>

          <h2 className="mb-2 text-xl font-bold">Classification</h2>
          <p>
            <strong>Class:</strong> {data.class}
          </p>
          <p>
            <strong>Genus:</strong> {data.genus}
          </p>
          <p>
            <strong>Order:</strong> {data.order}
          </p>
          <p>
            <strong>Family:</strong> {data.family}
          </p>
          <p>
            <strong>Kingdom:</strong> {data.kingdom}
          </p>
          <p>
            <strong>Species:</strong> {data.species}
          </p>
          <p>
            <strong>Division:</strong> {data.division}
          </p>
        </div>
      </div>
    </div>
  );
}
