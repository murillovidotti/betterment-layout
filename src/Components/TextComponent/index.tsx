import * as S from './styles';



export default function ComponentText({title, description, icon}){
    return (
        <S.Box>
            <div style={{marginBottom: '7px'}}>
            {icon}
            </div>
            <h3 style={{color: 'white', marginBottom: '12px', fontSize: '18px'}}>{title}</h3>
            <p style={{color: 'white', fontSize: '16px'}}><span>{description}</span></p>
        </S.Box>
    )
}