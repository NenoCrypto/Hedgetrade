import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import TradingViewChart from "../Components/Chart/TradingViewChart";
import { DashBoardCard } from "../Components/Cards/DashBoardCard";
import { StarIcon } from "../Components/Icons";
import { CartIcon } from "../Components/Icons/CartIcon";
import { PencilIcon } from "../Components/Icons/PencilIcon";
import { WalletIcon } from "../Components/Icons/WalletIcon";

const CreateBluePrint = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="dashboard-container">
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <DashBoardCard
            color={"#76D1F5"}
            leftLabel={"HedgeScore"}
            leftValue={"532"}
            rightLabel={"Trader Rank"}
            rightValue={"23"}
            icon={StarIcon}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <DashBoardCard
            color={"#9799A9"}
            leftLabel={"Published"}
            leftValue={"12"}
            rightLabel={"Success Rate"}
            rightValue={"77%"}
            icon={PencilIcon}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <DashBoardCard
            color={"#d476dc"}
            leftLabel={"Purchased"}
            leftValue={"5"}
            rightLabel={" Success Rate"}
            rightValue={"80%"}
            icon={CartIcon}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <DashBoardCard
            color={"#991181"}
            leftLabel={"ACA Earned"}
            leftValue={"11,200"}
            rightLabel={"Total Profit"}
            rightValue={"755%"}
            icon={WalletIcon}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Card className="hedge-card">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Create Blueprint
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="buyPair"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Buy Pair"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="sellPair"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Sell Pair"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="tradeType"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Trade Type"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="exchange"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Exchange"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="stake"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Stake"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="expiry"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Expiry"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="orderPrice"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Min Order"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="maxOrder"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Max Order"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="takeProfit"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Take Profit"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Controller
                      name="stopLoss"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Stop Loss"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="hedge-card">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Trading View Chart
              </Typography>
              <TradingViewChart />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card className="hedge-card">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Instructions
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                Staking
              </Typography>
              <Typography variant="body2" paragraph>
                Higher the stake, more confident you are in your prediction as
                well higher are the returns. Blueprint purchased price is 10% of
                your stake.
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                Successful Close
              </Typography>
              <Typography variant="body2" paragraph>
                The blueprint will close Successful if it hits both the entry
                and exit price. In this event, you will receive back all of your
                stakes and buyins minus the commission.
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                Neutral Close
              </Typography>
              <Typography variant="body2" paragraph>
                The blueprint will close Neutral if it fails to hit the entry
                price and the exit price. In this event, you will receive back
                all of your stake minus the commission and the buyers will
                receive back their buyins.
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                Failed Close
              </Typography>
              <Typography variant="body2">
                The blueprint will close failed if it hits the entry price but
                not the exit price. In this event, your stake will be
                distributed among the buyers and the buyers will get back their
                buyins minus the commission.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateBluePrint;
