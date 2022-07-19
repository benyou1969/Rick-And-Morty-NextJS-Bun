import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { CustomSkeleton } from './CustomSkeleton';

export function CharacterCardSkeleton(): JSX.Element {
  return <div  style={{
    background: '#3c3e44',
    color: '#fff',
    padding: '10px',
    margin: '3rem 0',
    borderRadius: '1rem',
    maxWidth: '300px',
    position: 'relative',
  }}>
    <CustomSkeleton circle={true} height={200} width={200} style={{
      borderRadius: '50%',
      position: 'absolute',
      top: '-30%',
      left: '20%',
      border: `5px solid ${'gray'}`,
    }} />
    <div style={{
      margin: '110px 0',
    }}></div>
    <h1><CustomSkeleton/></h1>
    <div>
      <div style={{
        color: 'gray'
      }}>Status</div>
      <div style={{display: "flex", justifyContent: "space-between"}}><CustomSkeleton width={'100px'} />{' - '}<CustomSkeleton width={'100px'} /></div>
    </div>
    <div>
      <div style={{
        color: 'gray'
      }}>Last known location</div>
      <div><CustomSkeleton width={150} /></div>
    </div>
    <div>
      <div style={{
        color: 'gray'
      }}>First seen in:</div>
      <div>
      <CustomSkeleton width={150} />
      </div>
    </div>
  </div>;
}

