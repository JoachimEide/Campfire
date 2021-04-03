import SubscriptionsStyle from "./subscriptions.module.css"

export default function Subscriptions() {
    return (
      <div className={SubscriptionsStyle.container}>
        <h2 className="content-header">Manage subscriptions</h2>

        <div className={SubscriptionsStyle.subContainer}>

          <div classsName={SubscriptionsStyle.subRow}>
            <img className={SubscriptionsStyle.subLogo}
            alt="netflix logo"
            src="/images/DisneyPlusLogo.svg"
            />
            
            <div>
              <p>Netflix</p>
              <p>109,- per month</p>
            </div>
            <div>
              <p>Active</p>
              <p>Edit</p>
            </div>
          </div>


          <div classsName={SubscriptionsStyle.subRow}></div>
          <div classsName={SubscriptionsStyle.subAddTotalRow}></div>
        </div>

      </div>


    );
  }