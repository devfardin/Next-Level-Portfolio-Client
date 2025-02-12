const Container = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='container mx-auto px-8'> { children } </div>
  )
}

export default Container
