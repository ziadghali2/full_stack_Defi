const Transactions = () => {
  const { currentAccount } = useContext(TransactionContext);
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            connect your account to see transactions
          </h3>
        )}
        <div className="flex flex-wrap justify-center items-center mt-10">
          {dummyData.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;