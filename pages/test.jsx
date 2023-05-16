import { MainLayout, Modal, MultipleUploadFile, Table } from "@/components";
import useToggle from "@/helper/hooks/useToggle";
import { Field, FieldArray, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";

const Sidebar = () => {
  const router = useRouter();
  const path = router.asPath.split("/").filter((x) => x);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const data = [
    { name: "John", age: 25, city: "New York" },
    { name: "Jane", age: 30, city: "Los Angeles" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Alice", age: 20, city: "San Francisco" },
  ];

  // const filterData = (key, value) => {
  //   return data.filter((item) => {
  //     // Get all the keys of the current object
  //     const keys = Object.keys(item);
  //     // Check if the current key exists in the object
  //     if (keys.includes(key)) {
  //       // Get the value of the current key in the object
  //       const itemValue = item[key];
  //       // Check if the value matches the given value
  //       if (itemValue === value) {
  //         return true;
  //       }
  //     }
  //     // Return false if the key doesn't exist or value doesn't match
  //     return false;
  //   });
  // };

  const filterData = (query) => {
    return data.filter((item) => {
      // Get all the values of the current object
      const values = Object.values(item);
      // Check if any value contains the query
      for (const value of values) {
        if (
          typeof value === "string" &&
          value.toLowerCase().includes(query.toLowerCase())
        ) {
          return true;
        }
      }
      // Return false if the query doesn't match any value
      return false;
    });
  };
  const pageSize = 3; // Number of items per page
  let currentPage = 1; // Current page number
  let filtered = filterData(search);
  const paginateData = (filtered, page, pageSize) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  };

  currentPage = 2; // Change the current page

  return (
    <MainLayout>
      <Formik
        enableReinitialize
        initialValues={{
          friends: [{ name: "jared", age: 23 }],
        }}
        onSubmit={() => null}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <FieldArray
              name="friends"
              render={(arrayHelpers) => (
                <div className="flex flex-col-reverse gap-2">
                  {values.friends && values.friends.length > 0 ? (
                    values.friends.map((item, index) => (
                      <div className="flex" key={`---${index}`}>
                        <Field
                          key={`friends.${index}.name`}
                          name={`friends.${index}.name`}
                        />
                        <Field
                          type="number"
                          key={`friends.${index}.age`}
                          name={`friends.${index}.age`}
                        />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          remove
                        </button>
                        <button
                          type="submit"
                          onClick={() => arrayHelpers.insert(index, "")}
                        >
                          insert
                        </button>
                      </div>
                    ))
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        arrayHelpers.push({
                          name: "",
                          age: 0,
                        })
                      }
                    >
                      {/* show this when user has removed all friends from the list */}
                      Add a friend
                    </button>
                  )}
                </div>
              )}
            ></FieldArray>
          </Form>
        )}
      </Formik>

      <Formik
        enableReinitialize
        initialValues={{
          friends: [{ name: "jared", age: 23 }],
        }}
        onSubmit={() => null}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <FieldArray
              name="friends"
              render={(arrayHelpers) => (
                <div className="flex flex-col-reverse gap-2">
                  <Table
                    columns={[
                      {
                        key: "name",
                        title: "Name",
                        render: (item, index) => (
                          <Field name={`friends.${index}.name`} />
                        ),
                      },
                      {
                        key: "age",
                        title: "Age",
                        render: (item, index) => (
                          <>
                            {" "}
                            <Field name={`friends.${index}.age`} />
                            <button
                              key={`friends.${index}.age`}
                              type="submit"
                              onClick={() =>
                                arrayHelpers.push({
                                  name: "",
                                  age: 0,
                                })
                              }
                            ></button>
                          </>
                        ),
                      },
                      {
                        key: "age",
                        title: "Age",
                        render: (item, index) => (
                          <button
                            key={`friends.${index}`}
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            remove
                          </button>
                        ),
                      },
                    ]}
                    data={values.friends}
                  />
                </div>
              )}
            ></FieldArray>
          </Form>
        )}
      </Formik>

      {/* <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {path?.map((part, index) => {
          const url = `/${path.slice(0, index + 1).join("/")}`;
          const label = part.charAt(0).toUpperCase() + part.slice(1);

          return (
            <li key={url}>
              <Link href={url}>{label}</Link>
            </li>
          );
        })}
      </ul>
      {JSON.stringify(data)}
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {search}
      {JSON.stringify(filterData(search))}
      {JSON.stringify(paginateData(data, currentPage, pageSize))}
      {JSON.stringify(paginateData(data, currentPage, pageSize))}

      {router.pathname.includes("test") ? "red" : "blue"} */}
      {/* <Modal
        title={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus atque iste, veniam numquam exercitationem facilis neque accusantium velit ad. Pariatur quas amet rem possimus et repellendus laboriosam vel facilis!"
        }
      >
        <Formik>
          <MultipleUploadFile />
        </Formik>
      </Modal> */}
      {/* <div className="bg-gray-100">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          Open Modal
        </button>
        <Modal
          isOpen={showModal}
          setIsOpen={() => setShowModal(!showModal)}
          title={
            "Caelestinum Finale Termini — Stormterror Dvalin's Theme | Genshin Impact OST: Mondstadt Chapter"
          }
        >
          <Formik>
            <MultipleUploadFile />
          </Formik>
        </Modal>
      </div> */}
    </MainLayout>
  );
};

export default Sidebar;
