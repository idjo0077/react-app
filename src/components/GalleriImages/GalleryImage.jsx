export default function GalleryImage({name, isLarge, src, active}) {
	return (
		<div className={(isLarge ? 'img-large' : 'img-small') + (active ? ' active' : '')}>
			<img className={name} src={src}  alt="Painting"/>
		</div>
	)
}