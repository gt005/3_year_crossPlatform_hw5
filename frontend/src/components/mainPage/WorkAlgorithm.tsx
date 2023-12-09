const WorkAlgorithm = () => {
  return (
    <div className="work-algorythm grid-container">
      <div className="work-algorythm__header grid-container">
        <h2 className="work-algorythm__header__main-text">Как мы работаем</h2>
        <div className="work-algorythm__header__secondary-text text-normal">Алгоритм работы с нами для удобства и понимания проекта</div>
      </div>
      <div className="work-algorythm__algorythm-container">
        <div className="work-algorythm__algorythm-container__steps-list">
          <div className="work-algorythm__algorythm-container__steps-item">
            <h3 className="work-algorythm__algorythm-container__steps-item__main-text">Идея</h3>
            <div className="work-algorythm__algorythm-container__steps-item__secondary-text text-normal">Клиент приходит к нам с идеей. Это может быть изображение/эскиз или другой референс. А мы думаем над тем, как это реализовать, делаем технические чертежи и предлагаем решения по материалам.</div>
          </div>
          <div className="work-algorythm__algorythm-container__steps-item">
            <h3 className="work-algorythm__algorythm-container__steps-item__main-text">Техническое задание</h3>
            <div className="work-algorythm__algorythm-container__steps-item__secondary-text text-normal">Вместе с клиентом формулируем корректное ТЗ, которое включает в себя визуализацию изделия, эскизный чертёж с габаритами, информацию по материалам и отделке, срок реализации проекта и другие обязательные пункты.</div>
          </div>
          <div className="work-algorythm__algorythm-container__steps-item">
            <h3 className="work-algorythm__algorythm-container__steps-item__main-text">Коммерческое предложение</h3>
            <div className="work-algorythm__algorythm-container__steps-item__secondary-text text-normal">Предпочтительно используем натуральные материалы. Но любую смету можем оптимизировать, упростив материалы или конструктив. Сможем подстроиться под бюджет клиента и согласуем коммерческое предложение</div>
          </div>
          <div className="work-algorythm__algorythm-container__steps-item">
            <h3 className="work-algorythm__algorythm-container__steps-item__main-text">Подготовка рабочего проекта</h3>
            <div className="work-algorythm__algorythm-container__steps-item__secondary-text text-normal">Создадим рабочую документацию и чертежи. Это фундамент качественного производства. На этом этапе утверждаем с клиентом все габариты и материалы, чертежи и приступаем к производству.</div>
          </div>
          <div className="work-algorythm__algorythm-container__steps-item">
            <h3 className="work-algorythm__algorythm-container__steps-item__main-text">Производство и монтаж</h3>
            <div className="work-algorythm__algorythm-container__steps-item__secondary-text text-normal">Производство занимает от 15 рабочих дней, в зависимости от сложности и объёма. Монтажом тоже занимаемся самостоятельно. Ведь мы это сделаем быстро и аккуратно.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkAlgorithm;
