<template>
  <Button>
    Nu hz
  </Button>
  <Card class="w-[350px]">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div class="grid items-center w-full gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label for="name">Name</Label>
            <Input id="name" placeholder="Name of your project" />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter class="flex justify-between px-6 pb-6">
      <Button variant="outline">
        Cancel
      </Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/src/shared/ui/card";
import {Button} from "~/src/shared/ui/button";
</script>

<style scoped>

</style>
